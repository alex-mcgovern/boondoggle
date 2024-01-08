import { Tooltip } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	args: {
		children: <Button>Tooltip</Button>,
		tooltipContent: "Tooltip content",
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PlacementRight: Story = {
	args: {
		placement: "right",
		defaultOpen: true,
	},
};

export const PlacementLeft: Story = {
	args: {
		placement: "left",
		defaultOpen: true,
	},
};
