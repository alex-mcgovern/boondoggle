import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
  outDir: "dist",
  config: "./tsconfig.build.json",
  splitting: true,
  bundle: true,
  minify: true,
  sourcemap: true,
  format: ["esm", "cjs"],
  dts: true,
  target: "es2020",

  treeshake: true,

  tsconfig: "./tsconfig.build.json",
  esbuildPlugins: [
    vanillaExtractPlugin({
      outputCss: true,
      runtime: false,
      identifiers: "short",
    }),
  ],
  clean: true,
});
