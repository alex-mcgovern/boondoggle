import { DataTableFilterSelect as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/DataTableFilterSelect",
	component: StoryComp,
	args: {
		strApply: "Apply",
		strTitle: "Filter by account",
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
