import { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-addon-pseudo-states",
		"@whitespace/storybook-addon-html",
	],
	docs: {
		autodocs: true,
		defaultName: "Documentation",
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	// stories: [
	// 	"../(components|documentation)/**/*.stories.tsx",
	// 	"../(components|documentation)/**/stories.tsx",
	// 	"../(components|documentation)/**/*.mdx",
	// ],
	stories: ["../components/**/*.stories.tsx"],
	typescript: {
		check: false,
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
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			plugins: [vanillaExtractPlugin()],
		});
	},
};

export default config;
