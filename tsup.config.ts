import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: true,
  bundle: true,
  minify: false,
  sourcemap: false,
  treeshake: true,
  format: ["cjs", "esm"],
  dts: true,
  target: "es2020",
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
