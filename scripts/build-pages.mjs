#!/usr/bin/env node
/**
 * Prepare GitHub Pages artifact: production static frontend only.
 * Output: dist-pages-publish/ (consumed by deploy-pages workflow → gh-pages branch)
 */

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const viteOut = 'dist-pages';
const publishDir = 'dist-pages-publish';
const domain = 'biu-gholdings.org';

rmSync(publishDir, { recursive: true, force: true });
mkdirSync(publishDir, { recursive: true });

const nestedIndex = join(viteOut, 'resources/pages/index.html');
const flatIndex = join(viteOut, 'index.html');
const sourceIndex = existsSync(flatIndex) ? flatIndex : nestedIndex;

if (!existsSync(sourceIndex)) {
    console.error('Missing Vite HTML output. Run: vite build --config vite.config.pages.js');
    process.exit(1);
}

cpSync(join(viteOut, 'assets'), join(publishDir, 'assets'), { recursive: true });

let indexHtml = readFileSync(sourceIndex, 'utf8');
indexHtml = indexHtml.replace(/\.\.\/\.\.\/assets\//g, '/assets/');
indexHtml = indexHtml.replace(/\/resources\/pages\//g, '/');

writeFileSync(join(publishDir, 'index.html'), indexHtml);
writeFileSync(join(publishDir, '404.html'), indexHtml);
writeFileSync(join(publishDir, '.nojekyll'), '\n');
writeFileSync(join(publishDir, 'CNAME'), `${domain}\n`);

console.log(`Pages artifact ready in ${publishDir}/`);
console.log('Included: assets/, index.html, 404.html, .nojekyll, CNAME');
console.log('Excluded: docs/, README, PDFs, Laravel source, deploy scripts');
