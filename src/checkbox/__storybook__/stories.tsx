import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "..";

const meta = {
    args: {},
    component: Checkbox,
    render: (props) => <Checkbox {...props}>Checkbox</Checkbox>,
    title: "Components/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
    args: {
        isIndeterminate: true,
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};
