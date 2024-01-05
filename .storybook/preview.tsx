import "@fortawesome/fontawesome-svg-core/styles.css";
import { Parameters } from "@storybook/react";

export const parameters: Parameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	controls: {
		expanded: false,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
		sort: "requiredFirst",
		viewMode: "docs",
	},
	layout: "centered",
	// viewport: {
	// 	defaultViewport: "tablet",
	// },
};
