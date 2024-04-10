/* eslint-disable jsdoc/require-jsdoc */
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
    build: {
        lib: {
            entry: [path.resolve(__dirname, "src/index.ts")],
            formats: ["es"],
            name: "boondoggle.design",
        },
        minify: false,
        rollupOptions: {
            external: [...Object.keys(pkg.dependencies), "react/jsx-runtime"],
            output: {
                globals: {
                    react: "react",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
                hoistTransitiveImports: true,
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        },
    },
    plugins: [
        react(),
        vanillaExtractPlugin({
            identifiers: "short",
        }),
    ],
});
