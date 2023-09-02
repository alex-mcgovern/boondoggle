import { ProgressBar as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {
        isVisible: true,
        value: 50,
    },
    component: StoryComp,
    title: "Components/ProgressBar",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
    },
};
export const VisibleValue: Story = {
    args: {
        isVisible: true,
        value: 50,
    },
};
export const Max: Story = {
    args: {
        value: 100,
    },
};
export const String: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        value: "50",
    },
};
export const OverMax: Story = {
    args: {
        value: 120,
    },
};
export const Float: Story = {
    args: {
        value: 120,
    },
};
export const Min: Story = {
    args: {
        value: 0,
    },
};
export const OverMin: Story = {
    args: {
        value: -10,
    },
};
