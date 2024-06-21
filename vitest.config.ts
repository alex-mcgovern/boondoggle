/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environmentMatchGlobs: [
			["**/*.tsx", "jsdom"],
			["**/*.ts", "node"],
		],
		globals: true,
		include: ["**/*test.ts?(x)"],
		includeSource: ["**/*.ts?(x)"],
		setupFiles: ["./test/setup.ts"],
	},
});
