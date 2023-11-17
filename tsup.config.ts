// import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";
import fs from "fs";
import path from "path";

/** -----------------------------------------------------------------------------
 * UTIL FOR GETTING THE FILES WE WANT TO GENERATE .DTS FILES FOR
 * ------------------------------------------------------------------------------- */

const isIncluded = (file: string) =>
	file.includes(".tsx") || file.includes("index.css.ts");
const isExcluded = (file: string) =>
	file.includes("_lib") ||
	file.includes("_components") ||
	file.includes("test") ||
	file.includes("stories") ||
	file.includes("spec") ||
	file.includes("mock") ||
	file.includes("types");

const files: string[] = [];

const getDtsFiles = (directory: string) => {
	const filesInDirectory = fs.readdirSync(directory);
	for (const file of filesInDirectory) {
		const absolute = path.join(directory, file);
		if (fs.statSync(absolute).isDirectory()) {
			/** @note Use of recursion */
			getDtsFiles(absolute);
		} else {
			if (isIncluded(absolute) && !isExcluded(absolute)) {
				files.push(absolute);
			}
		}
	}
};

getDtsFiles("./src");

/** -----------------------------------------------------------------------------
 * TSUP CONFIG
 * ------------------------------------------------------------------------------- */

export default defineConfig({
	banner: {
		js: '"use client"',
	},
	bundle: false,
	clean: true,
	config: "./tsconfig.build.json",
	dts: {
		entry: files,
		resolve: false,
	},
	// dts: true,
	entry: [
		"./src",
		"!./src/**/*mock.*",
		"!./src/**/*stories.*",
		"!./src/**/*test.*",
		"!./src/**/*spec.*",
		"!./src/**/types.*",
	],
	// esbuildPlugins: [
	// 	vanillaExtractPlugin({
	// 		identifiers: "short",
	// 		outputCss: false,
	// 		runtime: false,
	// 	}),
	// ],
	external: ["react"],
	format: "esm",
	minify: false,
	outDir: "dist",
	platform: "browser",
	sourcemap: false,
	splitting: false,
	target: "es2020",
	treeshake: false,
	metafile: true,
	tsconfig: "./tsconfig.build.json",
});
