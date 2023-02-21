import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";
import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: true,
  bundle: false,
  minify: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  dts: true,
  target: "node12",
  platform: "browser",

  esbuildPlugins: [vanillaExtractPlugin()],
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  clean: true,
});
