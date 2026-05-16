#!/usr/bin/env node
/**
 * Whitelist verification: artifact must contain ONLY the static institutional frontend.
 * Blocks README, docs/, PDFs, Laravel source, and Jekyll from reaching gh-pages.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allPublicPaths } from '../resources/js/lib/routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publishDir = process.argv[2] ?? join(__dirname, '..', 'dist-pages-publish');

const allowedRootFiles = new Set(['index.html', '404.html', '.nojekyll', 'CNAME']);
const allowedRouteDirs = new Set(
    allPublicPaths.filter((p) => p !== '/').map((p) => p.replace(/^\//, '')),
);
const forbiddenDirs = new Set([
    'docs',
    'deploy',
    'vendor',
    'storage',
    'database',
    'app',
    'routes',
    'scripts',
    'resources',
    'node_modules',
    '.github',
]);
const forbiddenRootNames = new Set([
    'README.md',
    'readme.md',
    'composer.json',
    'package.json',
    'artisan',
    '_config.yml',
]);
const forbiddenExtensions = ['.pdf', '.md', '.php', '.env', '.blade.php', '.lock'];
const allowedAssetExtensions = ['.js', '.css', '.map', '.woff', '.woff2'];

function walk(dir, files = []) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
            walk(full, files);
        } else {
            files.push(full);
        }
    }

    return files;
}

const errors = [];

if (!existsSync(publishDir)) {
    console.error(`Missing: ${publishDir}`);
    process.exit(1);
}

for (const entry of readdirSync(publishDir)) {
    const full = join(publishDir, entry);

    if (statSync(full).isDirectory()) {
        if (entry === 'assets') {
            continue;
        }

        if (!allowedRouteDirs.has(entry)) {
            errors.push(`Unexpected directory: ${entry}/`);
        }
        continue;
    }

    if (!allowedRootFiles.has(entry)) {
        errors.push(`Unexpected root file: ${entry}`);
    }

    if (forbiddenRootNames.has(entry)) {
        errors.push(`Forbidden root file (source leak): ${entry}`);
    }
}

if (!existsSync(join(publishDir, 'assets'))) {
    errors.push('Missing assets/');
}

for (const routeDir of allowedRouteDirs) {
    const indexPath = join(publishDir, routeDir, 'index.html');
    if (!existsSync(indexPath)) {
        errors.push(`Missing EN/PT static page: /${routeDir}/index.html`);
    }
}

if (!existsSync(join(publishDir, '.nojekyll'))) {
    errors.push('Missing .nojekyll (Jekyll would process the site otherwise)');
}

if (readFileSync(join(publishDir, 'CNAME'), 'utf8').trim() !== 'biu-gholdings.org') {
    errors.push('CNAME must be biu-gholdings.org');
}

const allFiles = walk(publishDir);

for (const file of allFiles) {
    const rel = relative(publishDir, file);
    const parts = rel.split(/[/\\]/);
    const base = parts.at(-1);

    if (parts.some((p) => forbiddenDirs.has(p))) {
        errors.push(`Forbidden path (source leak): ${rel}`);
    }

    if (base.startsWith('README')) {
        errors.push(`Forbidden README exposure: ${rel}`);
    }

    for (const ext of forbiddenExtensions) {
        if (base.endsWith(ext)) {
            errors.push(`Forbidden file type: ${rel}`);
        }
    }

    if (parts[0] === 'assets') {
        const ext = base.includes('.') ? base.slice(base.lastIndexOf('.')) : '';
        if (ext && !allowedAssetExtensions.includes(ext)) {
            errors.push(`Unexpected asset type: ${rel}`);
        }
        continue;
    }

    if (parts.length === 2 && parts[0] !== 'assets' && parts[1] !== 'index.html') {
        errors.push(`Route folder may only contain index.html: ${rel}`);
    }
}

const indexHtml = readFileSync(join(publishDir, 'index.html'), 'utf8');
if (indexHtml.includes('markdown-body') || indexHtml.includes('jekyll')) {
    errors.push('index.html looks like legacy README/Jekyll output');
}
if (!indexHtml.includes('/assets/') || !indexHtml.includes('id="app"')) {
    errors.push('index.html is not a valid institutional frontend shell');
}

const minExpectedFiles = allowedRootFiles.size + allowedRouteDirs.size + 1;
if (allFiles.length < minExpectedFiles) {
    errors.push(`Too few files in artifact (expected at least ${minExpectedFiles}, got ${allFiles.length})`);
}

if (errors.length) {
    console.error('Pages artifact verification failed:\n');
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
}

console.log(
    `OK: gh-pages-safe artifact (${allPublicPaths.length} EN/PT routes, ${allFiles.length} files, assets only).`,
);
