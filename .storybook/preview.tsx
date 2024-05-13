import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles/index.css";
import { Parameters, Preview } from "@storybook/react";
import { Toaster } from "../src/toaster";
import React from "react";
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
