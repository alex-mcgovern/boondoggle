import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { merge } from "webpack-merge";

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "storybook-addon-pseudo-states",
  ],
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: [
    "../(src|documentation)/**/*.stories.tsx",
    "../(src|documentation)/**/stories.tsx",
    "../(src|documentation)/**/*.mdx",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};

export default config;
