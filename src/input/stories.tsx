import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta = {
    args: {},
    component: Input,
    title: "Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsDisabled: Story = {};
