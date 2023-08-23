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
  esbuildPlugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vanillaExtractPlugin({
      identifiers: "short",
      outputCss: true,
      runtime: false,
    }),
  ],

  format: ["esm", "cjs"],
  minify: true,
  outDir: "dist",

  sourcemap: true,
  splitting: true,
  target: "es2020",
  treeshake: true,
  tsconfig: "./tsconfig.build.json",
});
