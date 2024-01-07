import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { ButtonGhost } from ".";
import { Icon } from "../icon";

const meta = {
    args: {
        children: "ButtonGhost",
    },
    component: ButtonGhost,
    title: "ButtonGhost",
} satisfies Meta<typeof ButtonGhost>;

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
                ButtonGhost
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                ButtonGhost
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
