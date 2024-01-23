import { Tooltip } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	args: {
		children: <Button>Tooltip</Button>,
		tooltipContent: "Tooltip text",
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PlacementTop: Story = {
	args: {
		placement: "top",
	},
};;

export const PlacementBottom: Story = {
	args: {
		placement: "bottom",
	},
};

export const PlacementRight: Story = {
	args: {
		placement: "right",
		
	},
};

export const PlacementLeft: Story = {
	args: {
		placement: "left",
	},
};
