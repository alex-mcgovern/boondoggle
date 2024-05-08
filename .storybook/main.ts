import { StorybookConfig } from "storybook";
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config: StorybookConfig = {
    addons: ["@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-vite",
    },
    stories: ["../components/**/*stories.tsx", "../components/**/*.mdx"],
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
            propFilter: () => true,
        },
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
