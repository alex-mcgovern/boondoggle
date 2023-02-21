import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";
import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  outDir: "dist",
  config: "./tsconfig.build.json",
  splitting: true,
  bundle: true,
  minify: false,
  sourcemap: true,
  format: ["esm"],
  dts: true,
  target: "node12",
  platform: "browser",

  esbuildPlugins: [vanillaExtractPlugin()],
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  clean: true,
});
