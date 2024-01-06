import type { Meta, StoryObj } from "@storybook/react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Button } from ".";
import { Icon } from "../icon";

const meta = {
	args: {
		children: "Button",
	},
	component: Button,
	title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SlotLeft: Story = {
	render: ({ children, ...args }) => (
		<Button {...args}>
			<Icon data-slot="left" icon={faShapes} />
			Button
		</Button>
	),
};

export const SlotRight: Story = {
	render: ({ children, ...args }) => (
		<Button {...args}>
			Button
			<Icon data-slot="right" icon={faShapes} />
		</Button>
	),
};
