import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonTable } from ".";

const meta = {
    args: {},
    component: SkeletonTable,
    title: "Components/SkeletonTable",
} satisfies Meta<typeof SkeletonTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
