import { Tabs as StoryComp } from "./Tabs";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/Tabs",
	component: StoryComp,
	args: {
		tabs: [
			{
				name: "tab_1",
				children: "Tab 1",
				active: true,
			},
			{
				name: "tab_1",
				children: "Tab 1",
				active: false,
			},
		],
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCount: Story = {
	args: {
		tabs: [
			{
				name: "tab_1",
				children: "Tab 1",
				active: true,
				count: 1,
			},
			{
				name: "tab_1",
				children: "Tab 1",
				active: false,
				count: 23,
			},
		],
	},
};
