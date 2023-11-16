import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
	banner: {
		js: '"use client"',
	},
	bundle: false,
	clean: false,
	config: "./tsconfig.build.json",
	dts: {
		entry: "./src/index.ts",
		resolve: false,
	},
	entry: [
		"./src",
		"!./src/**/*mock.*",
		"!./src/**/*stories.*",
		"!./src/**/*test.*",
		"!./src/**/types.*",
	],
	esbuildPlugins: [
		vanillaExtractPlugin({
			identifiers: "short",
			outputCss: false,
			runtime: false,
		}),
	],
	external: ["react"],
	format: "esm",
	minify: false,
	outDir: "dist/js",
	platform: "browser",
	sourcemap: false,
	splitting: false,
	target: "es2020",
	treeshake: false,
	metafile: true,
	tsconfig: "./tsconfig.build.json",
});
