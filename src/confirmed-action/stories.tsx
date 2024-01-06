import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmedAction } from ".";
import { ToastProvider } from "../toast";

const meta = {
    args: {
        buttonContent: "Confirm",
        onConfirmed: () => {
            alert("Confirmed!");
        },
        strConfirmText: "confirm",
        strInvalid: "Invalid",
        strPromptPrefix: "Type",
        strPromptSuffix: "to confirm",
    },
    component: ConfirmedAction,
    decorators: [
        (Story) => {
            return (
                <ToastProvider>
                    <Story />
                </ToastProvider>
            );
        },
    ],
    title: "ConfirmedAction",
} satisfies Meta<typeof ConfirmedAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ColorOverlayRed: Story = {
    args: {
        colorOverlay: "red",
    },
};
