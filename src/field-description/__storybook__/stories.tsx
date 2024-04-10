import type { Meta, StoryObj } from "@storybook/react";

import { FieldDescription } from "..";

const meta = {
    component: FieldDescription,
    title: "Components/FieldDescription",
} satisfies Meta<typeof FieldDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a field description.",
    },
};
