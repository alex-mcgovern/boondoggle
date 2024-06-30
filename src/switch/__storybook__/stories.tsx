import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "..";

const meta = {
    component: Switch.Root,
    title: "Switch",
} satisfies Meta<typeof Switch.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Switch.Label>Low power mode</Switch.Label>
                <Switch.Indicator />
            </>
        ),
    },
};

export const Reversed: Story = {
    args: {
        children: (
            <>
                <Switch.Indicator />
                <Switch.Label>Low power mode</Switch.Label>
            </>
        ),
    },
};
