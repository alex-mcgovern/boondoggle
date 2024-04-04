import "@fortawesome/fontawesome-svg-core/styles.css";
import { Parameters, Preview } from "@storybook/react";
import { Toaster } from "../src/toaster";
import React from "react";

export const parameters: Parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*",
    },
    docs: {
        source: {
            transform: (c: string) =>
                c
                    .replace(/([\s]+)([A-Za-z\d]+)=\{\(\) => \{\}\}\n/g, "")
                    .replace(/\n([\s]+)([A-Za-z\d]+)>/g, " $2>")
                    .replace(/<([A-Za-z\d]+)\s\s([A-Za-z\d]+)=/g, "<$1\n  $2="),
        },
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
