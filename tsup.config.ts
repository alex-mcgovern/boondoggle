import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

// import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  // config: "./tsconfig.build.json",
  splitting: false,
  bundle: true,
  minify: false,
  sourcemap: false,
  format: ["cjs"],
  dts: true,
  target: "es2020",
  tsconfig: "./tsconfig.build.json",

  esbuildPlugins: [
    vanillaExtractPlugin({
      outputCss: true,
      runtime: false,
      identifiers: "debug",
    }),
  ],
  // external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  clean: true,
});
