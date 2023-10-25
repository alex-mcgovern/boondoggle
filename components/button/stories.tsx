import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { Button as StoryComp } from ".";
import { Link } from "../../test/link.comp.mock";
import { Icon } from "../icon";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
	args: {
		children: "Button",
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/Button",
} satisfies Meta<typeof StoryComp>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const AsAnchorTag: Story = {
	args: {
		as: "a",
		href: "/",
	},
};


export const AsLinkComponent: Story = {
	args: {
		as: Link,
		href: "/",
	},
};


export const AppearancePrimary: Story = {
	args: {
		variant: "primary",
	},
};


export const AppearanceSecondary: Story = {
	args: {
		variant: "secondary",
	},
};


export const AppearanceGhost: Story = {
	args: {
		variant: "ghost",
	},
};


export const ColorOverlayBlue: Story = {
	args: {
		color: "blue",
	},
};


export const ColorOverlayRed: Story = {
	args: {
		color: "red",
	},
};


export const ColorOverlayGreen: Story = {
	args: {
		color: "green",
	},
};


export const ColorOverlayAmber: Story = {
	args: {
		color: "amber",
	},
};


export const ColorOverlayGrey: Story = {
	args: {
		color: "grey",
	},
};


export const IsLoading: Story = {
	args: {
		isLoading: true,
	},
};


export const SizeSm: Story = {
	args: {
		size: "sm",
	},
};


export const SizeMd: Story = {
	args: {
		size: "md",
	},
};


export const SizeLg: Story = {
	args: {
		size: "lg",
	},
};


export const SizeSquareSm: Story = {
	args: {
		size: "square_sm",
	},
};


export const SizeSquareMd: Story = {
	args: {
		size: "square_md",
	},
};


export const SizeSquareLg: Story = {
	args: {
		size: "square_md",
	},
};


export const With1SlotLeft: Story = {
	args: {
		slotLeft: <Icon icon={faArrowRight} />,
	},
};


export const With2SlotLeft: Story = {
	args: {
		slotLeft: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};


export const With3SlotLeft: Story = {
	args: {
		slotLeft: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};


export const WithTooltip: Story = {
	args: {
		strTooltip: "Tooltip",
		tooltipPlacement: "top",
	},
};


export const With1SlotRight: Story = {
	args: {
		slotRight: <Icon icon={faArrowRight} />,
	},
};


export const With2SlotRight: Story = {
	args: {
		slotRight: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};


export const With3SlotRight: Story = {
	args: {
		slotRight: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};
