import { Menu as StoryComp } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { MOCK_MENU_ITEMS } from "./consumer";

const meta = {
	title: "Components/V2Menu",
	component: StoryComp,
	args: {},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const PlacementRight: Story = {
	args: {
		popoverProps: {
			placement: "right",
		},
	},
};

export const DynamicItems: Story = {
	args: {
		menuProps: {
			items: MOCK_MENU_ITEMS,
		},
		popoverProps: {
			placement: "right",
		},
	},
};
