import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
  bundle: false,
  clean: true,
  config: "./tsconfig.build.json",
  dts: {
    entry: "./src/index.ts",
    resolve: true,
  },
  entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: "short",
      outputCss: true,
      runtime: false,
    }),
  ],
  format: "esm",
  minify: env === "production",
  outDir: env === "production" ? "dist" : "lib",
  sourcemap: env === "prod",
  splitting: true,
  target: "es2020",
  treeshake: true,
  tsconfig: "./tsconfig.build.json",
  watch: env === "development",
});
