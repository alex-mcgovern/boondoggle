import { Switch as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/V2/Switch",
	component: StoryComp,
	args: {
		name: "switch",
		label: "Switch me daddy",
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
