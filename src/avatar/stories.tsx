import type { Meta, StoryObj } from "@storybook/react";

import { Avatar as StoryComp } from ".";
import { MOCK_AVATAR } from "../../mocks/mock_avatar";

const meta = {
    component: StoryComp,
    title: "Avatar",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * If you have a URL for an image, you can use the `src` prop to display it.
 */
export const WithSrc: Story = {
    args: {
        src: MOCK_AVATAR,
    },
};

/**
 * If you don't have an image URL, you can use the `name` prop to display the
 * user's initials instead.
 */
export const Name: Story = {
    args: {
        name: "Alex McGovern",
    },
};

/**
 * You can customize the size of the `Avatar` by passing a pixel value to the
 * `size` prop.
 */
export const Size: Story = {
    args: {
        size: 32,
        src: MOCK_AVATAR,
    },
    parameters: {
        docs: {
            description:
                "You can customize the size of the `Avatar` by passing a pixel value to the `size` prop.",
        },
    },
};

/**
 * In addition to the default circular variant, you can also use the `square`
 * variant, which uses the same border radius used for button and input elements.
 */
export const Square: Story = {
    args: {
        src: MOCK_AVATAR,
        variant: "square",
    },
};
