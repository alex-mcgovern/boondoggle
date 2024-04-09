import type { Meta, StoryObj } from "@storybook/react";

import { ListBox } from ".";

const meta = {
    args: {},
    component: ListBox,
    title: "ListBox",
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
