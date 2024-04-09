/// <reference types="vitest" />
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
    // @ts-expect-error - This is a valid Vite config option
    plugins: [vanillaExtractPlugin()],
    test: {
        includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
    },
});
