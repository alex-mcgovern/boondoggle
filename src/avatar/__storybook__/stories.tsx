import type { Meta, StoryObj } from "@storybook/react";

import { Avatar as StoryComp } from "..";
import { MOCK_AVATAR } from "../../../mocks/mock_avatar";

const meta = {
    component: StoryComp,
    title: "Components/Avatar",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSrc: Story = {
    args: {
        src: MOCK_AVATAR,
    },
};

export const Name: Story = {
    args: {
        name: "Alex McGovern",
    },
};

export const Size: Story = {
    args: {
        size: 32,
        src: MOCK_AVATAR,
    },
};

export const Square: Story = {
    args: {
        src: MOCK_AVATAR,
        variant: "square",
    },
};
