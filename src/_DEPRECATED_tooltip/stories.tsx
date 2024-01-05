import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from ".";
import { Icon } from "../icon";
import { Button } from "../button";

const meta = {
	args: {},
	component: Tooltip,
	title: "❌ Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-expect-error todo: fix this
export const Default: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<button type="button">
						<Icon icon={faInfoCircle} />
					</button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};

// @ts-expect-error todo: fix this
export const DisabledTrigger: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<button aria-disabled type="button">
						<Icon icon={faInfoCircle} />
					</button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};

// @ts-expect-error todo: fix this
export const DisabledButtonTrigger: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<Button isDisabled name="blah" type="button">
						Hello there
					</Button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};
