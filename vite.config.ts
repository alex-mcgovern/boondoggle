import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

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
            external: [
                ...Object.keys(pkg.dependencies).map(
                    (key) => new RegExp(`^${key}`),
                ),
                ...Object.keys(pkg.peerDependencies).map(
                    (key) => new RegExp(`^${key}`),
                ),
                "react/jsx-runtime",
            ],
            output: {
                globals: {
                    react: "react",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
    define: {
        "import.meta.vitest": "undefined",
    },
    plugins: [react(), dts({ rollupTypes: true })],
    test: {
        environmentMatchGlobs: [
            ["**/*.tsx", "jsdom"],
            ["**/*.ts", "node"],
        ],
        globals: true,
        include: ["**/*test.ts?(x)"],
        includeSource: ["**/*.ts?(x)"],
        setupFiles: ["./test/setup.ts"],
    },
});
