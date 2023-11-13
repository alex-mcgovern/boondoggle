import { FilterPillMenu as StoryComp } from "./FilterPillMenu";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/FilterPillMenu",
	component: StoryComp,
	args: {
		pillText: "Filter",
		clearFilters: () => {},
		disabled: false,
		isFiltered: false,
		children: <>Lorem ipsum</>,
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
