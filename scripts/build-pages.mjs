#!/usr/bin/env node
/**
 * GitHub Pages static export — institutional frontend only.
 * Output: dist-pages-publish/ → pushed to gh-pages branch (no Laravel, no docs).
 */

import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allPublicPaths } from '../resources/js/lib/routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const viteOut = join(root, 'dist-pages');
const publishDir = join(root, 'dist-pages-publish');
const domain = 'biu-gholdings.org';

rmSync(publishDir, { recursive: true, force: true });
mkdirSync(publishDir, { recursive: true });

const nestedIndex = join(viteOut, 'resources/pages/index.html');
const flatIndex = join(viteOut, 'index.html');
const sourceIndex = existsSync(flatIndex) ? flatIndex : nestedIndex;

if (!existsSync(sourceIndex)) {
    console.error('Missing Vite output. Run: vite build --config vite.config.pages.js');
    process.exit(1);
}

cpSync(join(viteOut, 'assets'), join(publishDir, 'assets'), { recursive: true });

for (const name of [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
]) {
    cpSync(join(root, 'public', name), join(publishDir, name));
}

let shellHtml = readFileSync(sourceIndex, 'utf8');
shellHtml = shellHtml.replace(/\.\.\/\.\.\/assets\//g, '/assets/');
shellHtml = shellHtml.replace(/\/resources\/pages\//g, '/');

function writePageAtPath(routePath, html) {
    if (routePath === '/') {
        writeFileSync(join(publishDir, 'index.html'), html);
        return;
    }

    const dir = join(publishDir, routePath.replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
}

for (const routePath of allPublicPaths) {
    writePageAtPath(routePath, shellHtml);
}

writeFileSync(join(publishDir, '404.html'), shellHtml);
writeFileSync(join(publishDir, '.nojekyll'), '\n');
writeFileSync(join(publishDir, 'CNAME'), `${domain}\n`);

const verify = spawnSync('node', [join(__dirname, 'verify-pages-artifact.mjs'), publishDir], {
    stdio: 'inherit',
    cwd: root,
});

if (verify.status !== 0) {
    process.exit(verify.status ?? 1);
}

console.log(`Static export ready: ${publishDir}/`);
console.log(`Pages: ${allPublicPaths.length} EN/PT routes + 404.html + assets/`);
