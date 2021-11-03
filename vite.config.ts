import VuePlugin from '@vitejs/plugin-vue'
import Path from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    root: Path.resolve('src'),
    publicDir: 'assets',
    base: './',

    resolve: {
        alias: {
            '@': Path.resolve('src'),
        },
    },

    plugins: [
        VuePlugin(),
    ],

    build: {
        outDir: Path.resolve('build'),
        emptyOutDir: true,
        brotliSize: false,
        rollupOptions: {
            output: {
                entryFileNames: 'bundle/[name].js',
                chunkFileNames: 'bundle/[name].js',
                assetFileNames(info) {
                    return 'bundle/[name][extname]'
                },
            },
        },
    },

    server: {
        port: 8000,
        fs: {
            strict: true,
        },
    },
})
