import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), legacy()],
    server: {
        open: true,
        host: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "sass:math";@import '_vars.scss';`,
            }
        }
    }
})
