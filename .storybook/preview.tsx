import "@fortawesome/fontawesome-svg-core/styles.css";
import { Parameters } from "@storybook/react";
// import "../src/index.css";

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
