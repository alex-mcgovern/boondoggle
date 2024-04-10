import { StorybookConfig } from "storybook";
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config: StorybookConfig = {
    addons: ["@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-vite",
    },
    stories: ["../src/**/stories.tsx", "../src/**/*.mdx"],
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    typescript: {
        check: false,
        reactDocgen: "react-docgen-typescript",
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins: [
                vanillaExtractPlugin({
                    identifiers: "debug",
                    unstable_mode: "emitCss",
                }),
            ],
        });
    },
};

export default config;
