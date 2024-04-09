import type { Meta, StoryObj } from "@storybook/react";

import { Group } from ".";
import { Input } from "../input";
import {
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from "../text-field";

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
            <Input variant="unstyled" />
            <TextFieldClearButton />
            <TextFieldCopyButton />
            <TextFieldVisibilityButton />
        </Group>
    ),
};
