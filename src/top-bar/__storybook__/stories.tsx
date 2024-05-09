import type { Meta, StoryObj } from "@storybook/react";

import { TopBar } from "..";

const meta = {
    args: {},
    component: TopBar,
    parameters: { layout: "fullscreen" },
    title: "Components/TopBar",
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: "Top bar" },
};
