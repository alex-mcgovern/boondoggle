import "@fortawesome/fontawesome-svg-core/styles.css";
import { Parameters, Preview } from "@storybook/react";
import { Toaster } from "../src/toaster";
import React from "react";

export const parameters: Parameters = {
    layout: "centered",
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
