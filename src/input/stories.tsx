import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";
import { SearchFieldIcon } from "../search-field";

const meta = {
    args: {},
    component: Input,
    title: "Components/Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsDisabled: Story = {
    args: {
        disabled: true,
    },
};

export const Icon: Story = {
    args: {
        icon: <SearchFieldIcon />,
    },
};
