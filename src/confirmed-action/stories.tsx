import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "../toast";
import { ConfirmedAction } from ".";

const meta = {
	title: "ConfirmedAction",
	component: ConfirmedAction,
	args: {
		buttonContent: "Confirm",
		onConfirmed: () => {
			alert("Confirmed!");
		},
		strPromptPrefix: "Type",
		strPromptSuffix: "to confirm",
		strConfirmText: "confirm",
		strInvalid: "Invalid",
	},
	decorators: [
		(Story) => {
			return (
				<ToastProvider>
					<Story />
				</ToastProvider>
			);
		},
	],
} satisfies Meta<typeof ConfirmedAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ColorOverlayRed: Story = {
	args: {
		colorOverlay: "red",
	},
};
