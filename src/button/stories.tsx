import { faArrowRight } from "@fortawesome/pro-solid-svg-icons/faArrowRight";
import type { Meta, StoryObj } from "@storybook/react";
import { Button as StoryComp } from ".";
import { Link } from "../../test/link.comp.mock";
import { Icon } from "../icon";

const meta = {
	args: {
		children: "Button",
	},
	component: StoryComp,
	title: "Components/V1/Button",
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
		appearance: "primary",
	},
};

export const AppearanceSecondary: Story = {
	args: {
		appearance: "secondary",
	},
};

export const AppearanceGhost: Story = {
	args: {
		appearance: "ghost",
	},
};

export const AppearanceLink: Story = {
	args: {
		appearance: "link",
	},
};

export const ColorOverlayBlue: Story = {
	args: {
		colorOverlay: "blue",
	},
};

export const ColorOverlayRed: Story = {
	args: {
		colorOverlay: "red",
	},
};

export const ColorOverlayGreen: Story = {
	args: {
		colorOverlay: "green",
	},
};

export const ColorOverlayAmber: Story = {
	args: {
		colorOverlay: "amber",
	},
};

export const ColorOverlayGrey: Story = {
	args: {
		colorOverlay: "grey",
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
