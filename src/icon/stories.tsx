import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Icon } from ".";

const meta = {
    args: {},
    component: Icon,
    title: "Icon",
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // @ts-expect-error font-awesome is shit sometimes
    args: {
        icon: faShapes,
    },
};
