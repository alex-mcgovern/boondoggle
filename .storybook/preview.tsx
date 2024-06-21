import "@fortawesome/fontawesome-svg-core/styles.css";
import "../src/styles/index.css";
import type { Parameters, Preview } from "@storybook/react";
import React from "react";
import { Toaster } from "../src/toaster";
import theme from "./theme";

export const parameters: Parameters = {
	layout: "centered",
};

export const preview: Preview = {
	parameters: {
		docs: {
			theme,
		},
	},
	decorators: [
		(Story) => {
			return (
				<>
					<Toaster />
					<Story />
				</>
			);
		},
	],
};
