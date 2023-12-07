import { SkeletonTable } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/V1/SkeletonTable",
	component: SkeletonTable,
	args: {},
} satisfies Meta<typeof SkeletonTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
