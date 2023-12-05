import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { MenuButton as StoryComp } from ".";
import { Icon } from "../icon";

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

export const ItemsWithSections: Story = {
	args: {
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
};
