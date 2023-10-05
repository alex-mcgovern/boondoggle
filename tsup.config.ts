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
    format: ["esm", "cjs"],
    minify: false,
    outDir: "dist",
    platform: "browser",
    sourcemap: true,
    splitting: true,
    target: "es2020",
    treeshake: true,
    tsconfig: "./tsconfig.build.json",
});
