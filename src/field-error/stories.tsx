import type { Meta, StoryObj } from "@storybook/react";

import { FieldError } from ".";

const meta = {
    component: FieldError,
    title: "Components/FieldError",
} satisfies Meta<typeof FieldError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This field is required",
    },
};
