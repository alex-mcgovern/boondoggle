/// <reference types="vitest" />
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [vanillaExtractPlugin()],
    test: {
        includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
    },
});
