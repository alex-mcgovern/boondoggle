import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton as StoryComp } from ".";

const meta = {
    component: StoryComp,
    title: "Skeleton",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
