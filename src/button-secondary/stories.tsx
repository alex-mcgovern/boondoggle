import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { ButtonSecondary } from ".";
import { Icon } from "../icon";

const meta = {
    args: {
        children: "ButtonSecondary",
    },
    component: ButtonSecondary,
    title: "ButtonSecondary",
} satisfies Meta<typeof ButtonSecondary>;

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
                ButtonSecondary
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                ButtonSecondary
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
