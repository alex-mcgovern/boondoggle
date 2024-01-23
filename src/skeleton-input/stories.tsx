import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonInput as StoryComp } from ".";

const meta = {
    args: {},
    component: StoryComp,
    title: "SkeletonInput",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
