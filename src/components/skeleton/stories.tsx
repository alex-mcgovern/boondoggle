import { Skeleton as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	component: StoryComp,
	title: "Components/Skeleton",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
