import { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { merge } from "webpack-merge";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-essentials",
		// "@storybook/addon-interactions",
		// "@storybook/addon-mdx-gfm",
		// "storybook-addon-pseudo-states",
		// "@whitespace/storybook-addon-html",
	],
	docs: {
		autodocs: false,
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
			shouldIncludeExpression: false,
			shouldRemoveUndefinedFromOptional: true,
			shouldExtractLiteralValuesFromEnum: false,
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
