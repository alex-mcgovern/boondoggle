import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
	banner: {
		js: '"use client"',
	},
	bundle: true,
	clean: true,
	config: "./tsconfig.build.json",
	dts: {
		entry: "./src/index.ts",
		resolve: false,
	},
	entry: ["src/index.ts"],
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
	outDir: "dist",
	platform: "browser",
	sourcemap: true,
	splitting: true,
	target: "es2020",
	treeshake: false,
	metafile: true,
	tsconfig: "./tsconfig.build.json",
});
