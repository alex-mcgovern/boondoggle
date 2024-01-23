import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Button } from ".";
import { Icon } from "../icon";

const meta = {
    args: {
        children: "Button",
    },
    component: Button,
    title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SlotLeft: Story = {
    args: {
        children: (
            <>
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
                Button
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                Button
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
