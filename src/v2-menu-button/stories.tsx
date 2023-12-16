import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";
import { Meta, StoryObj } from "@storybook/react";
import { MenuButton as StoryComp } from ".";
import { Icon } from "../v2-icon";

const meta = {
	title: "Components/V2/MenuButton",
	component: StoryComp,
	args: {
		buttonProps: {
			children: <Icon icon={faBars} />,
		},
		menuProps: {
			items: [
				{
					name: "Europe",
					id: "europe",
					children: [
						{
							id: "france",
							name: "France",
						},
						{
							id: "germany",
							name: "Germany",
						},
						{
							id: "spain",
							name: "Spain",
						},
					],
				},
				{
					type: "SEPARATOR",
					id: "separator_1",
				},
				{
					name: "MENA",
					id: "mena",
					children: [
						{
							id: "uae",
							name: "United Arab Emirates",
						},
						{
							id: "saudi_arabia",
							name: "Saudi Arabia",
						},
						{
							id: "oman",
							name: "Oman",
						},
					],
				},
			],
		},
	},
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

/** -----------------------------------------------------------------------------
 * BUTTON SIZE
 * ------------------------------------------------------------------------------- */

export const ButtonSizeSquareSm: Story = {
	args: {
		buttonProps: {
			size: "square_sm",
		},
	},
};
export const ButtonSizeSquareMd: Story = {
	args: {
		buttonProps: {
			size: "square_md",
		},
	},
};
export const ButtonSizeSquareLg: Story = {
	args: {
		buttonProps: {
			size: "square_lg",
		},
	},
};
export const ButtonSizeSm: Story = {
	args: {
		buttonProps: {
			size: "sm",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};
export const ButtonSizeMd: Story = {
	args: {
		buttonProps: {
			size: "md",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};
export const ButtonSizeLg: Story = {
	args: {
		buttonProps: {
			size: "lg",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};

/** -----------------------------------------------------------------------------
 * PLACEMENT END MIDDLE
 * ------------------------------------------------------------------------------- */

export const PlacementRightSizeSm: Story = {
	args: {
		popoverProps: {
			placement: "right",
		},
		buttonProps: {
			size: "sm",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};
export const PlacementRightSizeMd: Story = {
	args: {
		popoverProps: {
			placement: "right",
		},
		buttonProps: {
			size: "md",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};
export const PlacementRightSizeLg: Story = {
	args: {
		popoverProps: {
			placement: "right",
		},
		buttonProps: {
			size: "lg",
			children: (
				<>
					Click me <Icon icon={faAngleDown} />
				</>
			),
		},
	},
};
