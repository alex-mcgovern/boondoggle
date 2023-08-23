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
  // dts: true,
  entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
  format: ["esm", "cjs"],
  minify: true,
  outDir: "dist",
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short",
      outputCss: true,
      runtime: false,
    }),
  ],
  sourcemap: true,
  splitting: true,
  target: "es2020",
  treeshake: true,
  tsconfig: "./tsconfig.build.json",
});
