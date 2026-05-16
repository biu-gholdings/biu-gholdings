#!/usr/bin/env node
/**
 * Production safety checks for GitHub Pages artifact.
 * Fails CI if internal repo content could be published.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const publishDir = process.argv[2] ?? 'dist-pages-publish';

const allowedRootFiles = new Set(['index.html', '404.html', '.nojekyll', 'CNAME']);
const forbiddenNames = new Set(['README.md', 'readme.md']);
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

if (!existsSync(publishDir)) {
    console.error(`Missing artifact directory: ${publishDir}`);
    process.exit(1);
}

const rootEntries = readdirSync(publishDir);
const errors = [];

for (const entry of rootEntries) {
    const full = join(publishDir, entry);
    if (statSync(full).isDirectory()) {
        if (entry !== 'assets') {
            errors.push(`Unexpected root directory: ${entry}`);
        }
        continue;
    }

    if (!allowedRootFiles.has(entry)) {
        errors.push(`Unexpected root file: ${entry}`);
    }
}

if (!existsSync(join(publishDir, 'assets'))) {
    errors.push('Missing assets/ directory');
}

const cname = readFileSync(join(publishDir, 'CNAME'), 'utf8').trim();
if (cname !== 'biu-gholdings.org') {
    errors.push(`CNAME must be biu-gholdings.org (got: ${cname})`);
}

const nojekyll = readFileSync(join(publishDir, '.nojekyll'), 'utf8');
if (nojekyll.length > 1) {
    errors.push('.nojekyll must be empty');
}

for (const file of walk(publishDir)) {
    const rel = relative(publishDir, file);
    const parts = rel.split(/[/\\]/);
    const base = parts[parts.length - 1];

    if (forbiddenNames.has(base)) {
        errors.push(`Forbidden file: ${rel}`);
    }

    if (parts.some((p) => forbiddenDirs.has(p))) {
        errors.push(`Forbidden path segment: ${rel}`);
    }

    for (const ext of forbiddenExtensions) {
        if (base.endsWith(ext)) {
            errors.push(`Forbidden extension (${ext}): ${rel}`);
        }
    }
}

const indexHtml = readFileSync(join(publishDir, 'index.html'), 'utf8');
if (indexHtml.includes('markdown-body') || indexHtml.includes('Jekyll')) {
    errors.push('index.html looks like legacy Jekyll/README output');
}

if (!indexHtml.includes('/assets/')) {
    errors.push('index.html must reference Vite /assets/ bundles');
}

if (errors.length) {
    console.error('Pages artifact verification failed:\n');
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
}

console.log(`OK: ${publishDir} is safe to publish (${walk(publishDir).length} files under assets/ + shell).`);
