import { Button } from ".";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../icon";

const meta = {
	title: "Components/V2/Button",
	component: Button,
	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** -----------------------------------------------------------------------------
 * VARIANTS
 * ------------------------------------------------------------------------------- */

export const Primary: Story = {
	args: {
		appearance: "primary",
	},
};

export const Secondary: Story = {
	args: {
		appearance: "secondary",
	},
};

export const Ghost: Story = {
	args: {
		appearance: "ghost",
	},
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

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
