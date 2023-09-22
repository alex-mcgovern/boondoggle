import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
    bundle: true,
    clean: true,
    config: "./tsconfig.build.json",
    dts: {
        entry: "./src/index.ts",
        resolve: false,
    },
    entry: ["src/index.ts"],

    esbuildPlugins: [
        vanillaExtractPlugin({
            identifiers: "debug",
            outputCss: true,
            runtime: false,
        }),
    ],

    format: ["esm"],

    minify: false,

    outDir: "dist",
    // entry: [
    //     "src",
    //     "!src/**/*.css.ts",
    //     "!src/**/stories.*",
    //     "!src/**/*.test.*",
    //     "!src/**/test.*",
    //     "!src/**/types.ts",
    // ],
    platform: "browser",
    sourcemap: false,
    target: "es2020",
    treeshake: true,
    tsconfig: "./tsconfig.build.json",
});
