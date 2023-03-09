const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = {
  stories: [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
    "../documentation/**/*.stories.tsx",
    "../documentation/**/*.stories.mdx",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};
