import { Tabs as StoryComp } from "./Tabs";
import { Meta, StoryObj } from "@storybook/react";
const meta = {
	title: "Components/Tabs",
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
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
