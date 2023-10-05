import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
    banner: {
        js: '"use client"',
    },
    bundle: false,
    clean: true,
    config: "./tsconfig.build.json",
    dts: {
        entry: "./src/index.ts",
        resolve: false,
    },
    entry: [
        "src/**/*.{ts,tsx}",
        "!src/**/*stories*",
        "!src/**/*test*",
        "!src/**/*mock*",
        "!src/**/*.css.ts",
        "!src/**/*.css.ts.vanilla.css*",
    ],
    esbuildPlugins: [
        vanillaExtractPlugin({
            identifiers: "debug",
            outputCss: true,
            runtime: false,
        }),
    ],
    external: ["react"],
    format: ["esm", "cjs"],
    injectStyle: false,
    minify: false,
    outDir: "dist",
    platform: "browser",
    sourcemap: true,
    splitting: false,
    target: "es2020",
    tsconfig: "./tsconfig.build.json",
});
