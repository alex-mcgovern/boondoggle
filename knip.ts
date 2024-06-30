import type { KnipConfig } from "knip";

const config: KnipConfig = {
    entry: ["src/*/index.ts", "src/**/*.mdx"],
    ignore: [],
    ignoreDependencies: [
        "@radix-ui/colors",
        "@parcel/packager-ts",
        "@parcel/transformer-typescript-tsc",
        "@parcel/transformer-typescript-types",
        "@storybook/blocks",
    ],
    project: ["src/**/*.{ts,tsx}"],
};

export default config;
