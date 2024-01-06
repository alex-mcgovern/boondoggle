import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonTable } from ".";

const meta = {
	args: {},
	component: SkeletonTable,
	title: "SkeletonTable",
} satisfies Meta<typeof SkeletonTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
