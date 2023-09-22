import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
    bundle: false,
    clean: true,
    config: "./tsconfig.build.json",
    dts: {
        entry: "./src/index.ts",
        resolve: false,
    },
    entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
    esbuildPlugins: [
        vanillaExtractPlugin({
            identifiers: "short",
            outputCss: true,
            runtime: false,
        }),
    ],
    format: ["esm"],
    minify: false,
    outDir: "dist",
    sourcemap: true,
    splitting: false,
    target: "es2020",
    treeshake: true,
    tsconfig: "./tsconfig.build.json",
});
