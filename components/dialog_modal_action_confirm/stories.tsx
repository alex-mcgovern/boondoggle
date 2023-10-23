import { DialogModalActionConfirm as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		buttonText: "Freeze account",
		confirmText: "freeze account",
		onClick: () => {
			alert("Confirmed");
		},
		promptPrefix: "Please type",
		promptSuffix: "to continue",
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/DialogModalActionConfirm",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithColorOverlay: Story = {
	args: {
		colorOverlay: "red",
	},
};
