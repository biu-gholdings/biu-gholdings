import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    publicDir: false,
    plugins: [react(), tailwindcss()],
    define: {
        'import.meta.env.VITE_STATIC_SITE': JSON.stringify('true'),
        'import.meta.env.VITE_APP_NAME': JSON.stringify('Biu-g Holdings LLC'),
    },
    build: {
        outDir: 'dist-pages',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'resources/pages/index.html'),
        },
    },
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});
