import { SkeletonInput as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "SkeletonInput",
	component: StoryComp,
	args: {},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
