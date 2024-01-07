import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { ButtonPrimary } from ".";
import { Icon } from "../icon";

const meta = {
    args: {
        children: "ButtonPrimary",
    },
    component: ButtonPrimary,
    title: "ButtonPrimary",
} satisfies Meta<typeof ButtonPrimary>;

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
                ButtonPrimary
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                ButtonPrimary
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
