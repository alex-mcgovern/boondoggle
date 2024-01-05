import { DateInput } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "DateInput",
	component: DateInput,
	args: {},
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
