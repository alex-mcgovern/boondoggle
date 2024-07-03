import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

function resolveGlobEntries(pattern: string): Record<string, string> {
    const entries: Record<string, string> = {};
    const files = glob.sync(pattern);
    files.forEach((file) => {
        // Create a unique key for each entry. You might want to customize this part.
        const entryKey = file
            .replace(/src\/|\/index\.tsx$/g, "")
            .replace(/\//g, "_");
        entries[entryKey] = file;
    });
    return entries;
}

export default defineConfig({
    build: {
        lib: {
            entry: resolveGlobEntries("src/*/index.tsx"),
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
                banner: '"use client";',
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
