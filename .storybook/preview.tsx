import { Parameters } from "@storybook/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";

export const parameters: Parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		sort: "requiredFirst",
		expanded: false,
		viewMode: "docs",
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
