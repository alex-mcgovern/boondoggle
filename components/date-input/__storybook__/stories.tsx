import type { Meta, StoryObj } from "@storybook/react";

import { DateInput } from "..";

const meta = {
    args: {},
    component: DateInput,
    title: "Components/DateInput",
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
