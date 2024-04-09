import type { Meta, StoryObj } from "@storybook/react";

import { Section } from ".";

const meta = {
    args: {},
    component: Section,
    title: "Section",
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
