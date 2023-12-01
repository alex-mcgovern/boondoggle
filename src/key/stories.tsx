import { Key as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/Key",
	component: StoryComp,
	args: { children: "⌘K" },
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
