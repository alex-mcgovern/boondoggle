import { DatePicker as StoryComp } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/DatePicker",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
