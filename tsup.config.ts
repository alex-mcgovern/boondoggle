import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
  bundle: env === "production",
  clean: true,
  config: "./tsconfig.build.json",
  dts: true,
  entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: "short",
      outputCss: true,
      runtime: false,
    }),
  ],
  format: ["esm"],
  minify: env === "production",
  outDir: env === "production" ? "dist" : "lib",
  sourcemap: env === "prod",
  // source map is only available in prod
  splitting: true,
  target: "es2020",
  treeshake: true,
  tsconfig: "./tsconfig.build.json",
  watch: env === "development",
});
