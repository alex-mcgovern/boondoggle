import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from ".";

const meta = {
    args: {},
    component: Checkbox,
    render: (props) => <Checkbox {...props}>Checkbox</Checkbox>,
    title: "Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
