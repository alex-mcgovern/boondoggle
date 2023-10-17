import { DialogModalActions as StoryComp } from ".";
import { Button } from "../button/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		actions: [
			<Button
				appearance="secondary"
				colorOverlay="red"
				name="cancel"
				onClick={() => {
					alert("Cancelled");
				}}
			>
				Cancel
			</Button>,
			<Button
				name="confirm"
				onClick={() => {
					alert("Confirmed");
				}}
			>
				Confirm
			</Button>,
		],
		isError: undefined,
		isLoading: undefined,
		onClickTryAgain: undefined,
		shouldCloseOnAction: undefined,
		strTryAgain: undefined,
	},

	component: StoryComp,
	title: "Components/DialogModalActions",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
