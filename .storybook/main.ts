import mdx from "@mdx-js/rollup";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { mergeConfig } from "vite";

export default {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  stories: [
    "../(src|documentation)/**/*.stories.tsx",
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
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      optimizeDeps: {
        include: [
          "@dessert-box/react",
          "@vanilla-extract/sprinkles/createRuntimeSprinkles",
        ],
      },
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
