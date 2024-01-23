import type { Meta, StoryObj } from "@storybook/react";

import { LoaderFullScreen as StoryComp } from ".";

const meta = {
    args: {},
    component: StoryComp,
    title: "LoaderFullScreen",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoadingText: Story = {
    args: {
        loadingText: "Loading...",
    },
};
