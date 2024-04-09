import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";

const meta = {
    args: {},
    component: Menu,
    title: "Components/Menu",
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
