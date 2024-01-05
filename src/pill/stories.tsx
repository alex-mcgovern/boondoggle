import { faCircleSmall } from "@fortawesome/pro-solid-svg-icons/faCircleSmall";
import { Meta, StoryObj } from "@storybook/react";
import { Pill } from ".";
import { Icon } from "../icon";

const meta = {
	title: "Pill",
	component: Pill,
	args: {
		children: "Pill",
		slotLeft: <Icon icon={faCircleSmall} />,
	},
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ColorOverlayRed: Story = {
	args: { colorOverlay: "red" },
};

export const ColorOverlayBlue: Story = {
	args: { colorOverlay: "blue" },
};

export const ColorOverlayGreen: Story = {
	args: { colorOverlay: "green" },
};

export const ColorOverlayAmber: Story = {
	args: { colorOverlay: "amber" },
};
