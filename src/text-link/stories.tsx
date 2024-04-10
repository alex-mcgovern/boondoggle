import type { Meta, StoryObj } from "@storybook/react";

import { TextLink } from ".";

const meta = {
    args: {},
    component: TextLink,
    title: "Components/TextLink",
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Click me",
        href: "/?path=/docs/components-textlink--docs",
    },
};
