import fs from "fs";
import path from "path";
// import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

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
	clean: false,
	config: "./tsconfig.build.json",
	entry: [
		"./src",
		"!./src/**/*mock.*",
		"!./src/**/*stories.*",
		"!./src/**/*test.*",
		"!./src/**/*spec.*",
	],
	external: ["react"],
	format: "esm",
	metafile: true,
	minify: true,
	outDir: "dist",
	platform: "browser",
	sourcemap: false,
	splitting: false,
	target: "es2020",
	tsconfig: "./tsconfig.build.json",
});
