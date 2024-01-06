import type { Meta, StoryObj } from "@storybook/react";

import { Switch as StoryComp } from ".";

const meta = {
	args: {
		label: "Switch me daddy",
		name: "switch",
	},
	component: StoryComp,
	title: "Switch",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
