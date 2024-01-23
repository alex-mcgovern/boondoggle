import { defineConfig } from "tsup";

export default defineConfig({
    banner: {
        js: '"use client"',
    },
    bundle: false,
    clean: true,
    config: "./tsconfig.build.json",
    entry: [
        "./src",
        "!./src/**/*mock.*",
        "!./src/**/*stories.*",
        "!./src/**/*test.*",
        "!./src/**/*spec.*",
    ],
    external: ["react"],
    format: "esm",
    metafile: true,
    minify: true,
    outDir: "dist",
    platform: "browser",
    sourcemap: false,
    splitting: false,
    target: "es2020",
    tsconfig: "./tsconfig.build.json",
});
