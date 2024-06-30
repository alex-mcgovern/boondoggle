import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "..";
import { Input } from "../../input";
import { TextField } from "../../text-field";

const meta = {
    args: {},
    component: Group,
    title: "Group",
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Group {...args}>
            <Input unstyled />
            <TextField.ClearButton />
            <TextField.CopyButton />
            <TextField.VisibilityButton />
        </Group>
    ),
};
