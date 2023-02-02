import Fs from 'node:fs'
import Path from 'node:path'
import {defineConfig} from 'vite'
import VitePluginChecker from 'vite-plugin-checker'
import VitePluginSolid from 'vite-plugin-solid'
import {ViteEjsPlugin as VitePluginEjs} from 'vite-plugin-ejs'

export default defineConfig({
    root: Path.resolve('src'),
    publicDir: 'assets',
    base: process.env.APP_BASE_URL || '/',

    resolve: {
        alias: {
            '~': Path.resolve('src'),
        },
    },

    envPrefix: 'APP_',

    plugins: [
        VitePluginSolid(),

        VitePluginEjs(config => ({
            env: config.env,
        })),

        process.env.NODE_ENV !== 'production' &&
            VitePluginChecker({
                typescript: true,
                terminal: true,
                enableBuild: true,
                overlay: {
                    position: 'br',
                    initialIsOpen: false,
                },
            })
        ,
    ],

    build: {
        outDir: Path.resolve('build'),
        emptyOutDir: true,
        reportCompressedSize: false,
        target: 'esnext',
        rollupOptions: {
            output: {
                entryFileNames: 'bundle/entry-[name].js',
                chunkFileNames: 'bundle/script-[name].js',
                assetFileNames(info) {
                    return 'bundle/asset-[name][extname]'
                },
            },
        },
    },

    server: {
        port: 8000,
        fs: {
            strict: true,
            allow: [
                '.',
                Fs.realpathSync(Path.join('node_modules', '.pnpm')), // Needed when 'node_modules' is a symbolic link.
            ],
        },
        watch: {
            ignored: ['!**/node_modules/@evilcss/**', '!**/node_modules/@eviljs/**'],
        },
    },

    optimizeDeps: {
        exclude: ['@eviljs/solid'],
    },
})
