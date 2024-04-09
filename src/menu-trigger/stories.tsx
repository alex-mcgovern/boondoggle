import type { Meta, StoryObj } from "@storybook/react";

import { MenuTrigger } from ".";

const meta = {
    args: {},
    component: MenuTrigger,
    title: "MenuTrigger",
} satisfies Meta<typeof MenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
