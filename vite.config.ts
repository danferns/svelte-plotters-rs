import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { ViteRsw } from "vite-plugin-rsw";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), ViteRsw()],
    resolve: {
        alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
    },
});
