import type { StorybookConfig } from "storybook";
import { withoutVitePlugins } from "@storybook/builder-vite";

const config: StorybookConfig = {
    addons: ["@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-vite",
    },
    stories: ["../src/**/*stories.tsx", "../src/**/*.mdx"],
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    async viteFinal(config) {
        return {
            ...config,
            plugins: await withoutVitePlugins(config.plugins, ["vite:dts"]),
        };
    },
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
};

export default config;
