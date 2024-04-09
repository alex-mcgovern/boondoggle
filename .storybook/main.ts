import { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { merge } from "webpack-merge";

const config: StorybookConfig = {
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "@storybook/addon-mdx-gfm",
        "@storybook/addon-webpack5-compiler-swc",
    ],
    docs: {
        autodocs: false,
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    stories: ["../src/**/stories.tsx", "../(src|documentation)/**/*.mdx"],
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
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            shouldExtractLiteralValuesFromEnum: false,
            shouldIncludeExpression: false,
            shouldRemoveUndefinedFromOptional: true,
        },
    },
    webpackFinal: async (config) =>
        merge(config, {
            plugins: [
                new VanillaExtractPlugin({
                    identifiers: "short",
                    outputCss: true,
                }),
            ],
        }),
};

export default config;
