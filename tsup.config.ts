import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

// import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  entry: ["src/**/index.(ts|tsx)", "src/**/*.css.ts"],
  outDir: "dist",
  config: "./tsconfig.build.json",
  splitting: false, // <- change back after development
  bundle: false, // <- change back after development
  minify: true,
  sourcemap: true,
  format: ["cjs", "esm"],
  dts: true,
  target: "es2020",

  plugins: [vanillaExtractPlugin()],
  // external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  clean: true,
});
