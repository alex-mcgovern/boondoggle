import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { FieldButton } from ".";
import { Icon } from "../icon";

const meta = {
    component: FieldButton,
    title: "Components/FieldButton",
} satisfies Meta<typeof FieldButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Icon icon={faShapes} />,
    },
};
