import { defineConfig } from "tsup";
import cssModulePlugin from "esbuild-plugin-css-module";

export default defineConfig({
	banner: {
		js: '"use client"\nimport "./index.css"',
	},
	bundle: true,
	clean: true,
	config: "./tsconfig.build.json",
	loader: {
		".css": "local-css",
	},
	// dts: {
	// 	entry: "./src/index.ts",
	// 	resolve: false,
	// },
	entry: ["src/components/*/index.ts"],
	external: ["react"],
	format: "esm",
	minify: false,
	outDir: "dist",
	platform: "browser",
	sourcemap: false,
	splitting: false,
	target: "es2020",
	treeshake: false,
	tsconfig: "./tsconfig.build.json",
});
