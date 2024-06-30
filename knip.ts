import type { KnipConfig } from "knip";

const config: KnipConfig = {
    entry: ["src/*/index.ts", "src/**/*.mdx"],
    ignore: [],
    ignoreDependencies: ["@radix-ui/colors", "@storybook/blocks"],
    project: ["src/**/*.{ts,tsx}"],
};

export default config;
