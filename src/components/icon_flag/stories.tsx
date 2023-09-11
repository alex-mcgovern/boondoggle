import { IconFlag as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {},
    component: StoryComp,
    title: "Components/IconFlag",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __height: 32,
        __width: 32,
        border: "border_default",
        borderRadius: "50%",
        code: "ie",
    },
};
