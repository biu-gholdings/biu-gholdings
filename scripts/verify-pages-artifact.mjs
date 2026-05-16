#!/usr/bin/env node
/**
 * Ensures the Pages artifact contains only the static institutional frontend.
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
const forbiddenDirs = new Set(['docs', 'deploy', 'vendor', 'storage', 'database', 'app', 'routes', 'scripts']);
const forbiddenExtensions = ['.pdf', '.md', '.php', '.env'];

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
}

if (!existsSync(join(publishDir, 'assets'))) {
    errors.push('Missing assets/');
}

for (const routeDir of allowedRouteDirs) {
    const indexPath = join(publishDir, routeDir, 'index.html');
    if (!existsSync(indexPath)) {
        errors.push(`Missing static page: /${routeDir}/index.html`);
    }
}

if (readFileSync(join(publishDir, 'CNAME'), 'utf8').trim() !== 'biu-gholdings.org') {
    errors.push('CNAME must be biu-gholdings.org');
}

for (const file of walk(publishDir)) {
    const rel = relative(publishDir, file);
    const parts = rel.split(/[/\\]/);
    const base = parts.at(-1);

    if (parts.some((p) => forbiddenDirs.has(p))) {
        errors.push(`Forbidden path: ${rel}`);
    }

    for (const ext of forbiddenExtensions) {
        if (base.endsWith(ext)) {
            errors.push(`Forbidden file type: ${rel}`);
        }
    }

    if (base === 'README.md') {
        errors.push(`Forbidden file: ${rel}`);
    }

    if (parts.length === 2 && parts[0] !== 'assets' && parts[1] !== 'index.html') {
        errors.push(`Route folder may only contain index.html: ${rel}`);
    }
}

const indexHtml = readFileSync(join(publishDir, 'index.html'), 'utf8');
if (indexHtml.includes('markdown-body') || !indexHtml.includes('/assets/')) {
    errors.push('index.html is not a valid Vite static shell');
}

if (errors.length) {
    console.error('Artifact verification failed:\n');
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
}

console.log(`OK: safe static frontend (${allPublicPaths.length} routes, assets only).`);
