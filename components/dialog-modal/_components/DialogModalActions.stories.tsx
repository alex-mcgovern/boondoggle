import { DialogModalActions as StoryComp } from "./DialogModalActions"; import { Button } from "../../button";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
	args: {
		actions: [
			<Button
				variant="secondary"
				color="red"
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
		onClickTryAgain: undefined,
		shouldCloseOnAction: undefined,
		strTryAgain: undefined,
	},

	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/DialogModalActions",
} satisfies Meta<typeof StoryComp>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};
