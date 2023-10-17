import { defineConfig } from "tsup";

export default defineConfig({
	banner: {
		js: '"use client"',
	},
	bundle: true,
	clean: true,
	config: "./tsconfig.build.json",
	// dts: {
	// 	entry: "./src/index.ts",
	// 	resolve: false,
	// },
	entry: ["src/components/*/index.ts"],
	loader: {
		".css": "local-css",
	},
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
