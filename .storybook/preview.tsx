import "@fortawesome/fontawesome-svg-core/styles.css";
import { Parameters, Preview } from "@storybook/react";
import { Toaster } from "../src/toaster";
import React from "react";

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

export const preview: Preview = {
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
