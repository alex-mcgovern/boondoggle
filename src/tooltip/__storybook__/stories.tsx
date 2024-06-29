import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "..";
import { Button, LinkButton } from "../../button";

const meta = {
	component: Tooltip.Root,
	args: {
		children: (
			<>
				<Tooltip.InfoButton />
				<Tooltip.Body>
					<p>Some helpful information</p>
				</Tooltip.Body>
			</>
		),
	},
	title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TriggerInfoButton: Story = {
	name: "Trigger: Tooltip.InfoButton",
	args: {
		children: (
			<>
				<Tooltip.InfoButton />
				<Tooltip.Body>
					<p>Some helpful information</p>
				</Tooltip.Body>
			</>
		),
	},
};

export const TriggerButton: Story = {
	name: "Trigger: Button",
	args: {
		children: (
			<>
				<Button>Button</Button>
				<Tooltip.Body>
					<p>You can use a button as a trigger</p>
				</Tooltip.Body>
			</>
		),
	},
};

export const TriggerLink: Story = {
	name: "Trigger: Link",
	args: {
		children: (
			<>
				<LinkButton>Link</LinkButton>
				<Tooltip.Body>
					<p>You can use a link as a trigger</p>
				</Tooltip.Body>
			</>
		),
	},
};

export const PlacementTop: Story = {
	name: "Placement: Top",
	render: (p) => (
		<Tooltip.Root {...p}>
			<Tooltip.InfoButton />
			<Tooltip.Body placement="top">
				<p>I appear on the top</p>
			</Tooltip.Body>
		</Tooltip.Root>
	),
};

export const PlacementRight: Story = {
	name: "Placement: Right",
	render: (p) => (
		<Tooltip.Root {...p}>
			<Tooltip.InfoButton />
			<Tooltip.Body placement="right">
				<p>I appear on the right</p>
			</Tooltip.Body>
		</Tooltip.Root>
	),
};

export const PlacementBottom: Story = {
	name: "Placement: Bottom",
	render: (p) => (
		<Tooltip.Root {...p}>
			<Tooltip.InfoButton />
			<Tooltip.Body placement="bottom">
				<p>I appear on the bottom</p>
			</Tooltip.Body>
		</Tooltip.Root>
	),
};

export const PlacementLeft: Story = {
	name: "Placement: Left",
	render: (p) => (
		<Tooltip.Root {...p}>
			<Tooltip.InfoButton />
			<Tooltip.Body placement="left">
				<p>I appear on the left</p>
			</Tooltip.Body>
		</Tooltip.Root>
	),
};
