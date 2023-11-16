import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
	bundle: true,
	clean: false,
	config: "./tsconfig.build.json",
	dts: false,
	entry: ["./src/index.ts"],
	esbuildPlugins: [
		vanillaExtractPlugin({
			identifiers: "short",
			outputCss: true,
			runtime: false,
		}),
	],
	external: ["react"],
	format: "esm",
	minify: false,
	outDir: "dist/css",
	platform: "browser",
	sourcemap: false,
	splitting: false,
	target: "es2020",
	treeshake: false,
	metafile: false,
	tsconfig: "./tsconfig.build.json",
});
