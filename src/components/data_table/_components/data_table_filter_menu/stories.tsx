import { DataTableFilterMenu as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/DataTableFilterMenu",
	component: StoryComp,
	args: {
		pillText: "Filter",
		children: <>Lorem ipsum</>,
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
