import VanillaExtractPlugin from "@vanilla-extract/esbuild-plugin";
import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: true,
  sourcemap: env === "prod", // source map is only available in prod
  clean: true, // rimraf disr
  dts: true, // generate dts file for main module
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: env === "production",
  bundle: env === "production",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: env === "development",
  target: "es2020",
  config: "tsconfig.build.json",
  outDir: env === "production" ? "dist" : "lib",
  // outDir: "dist",
  entry: ["src/index.ts"],
};
