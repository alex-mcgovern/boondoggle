import { faBars } from "@fortawesome/pro-regular-svg-icons/faBars";
import { type Meta, type StoryObj } from "@storybook/react";

import { MenuButton } from ".";
import { Button } from "../button";
import { Icon } from "../icon";

const meta = {
	args: {
		items: [
			{
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
				id: "europe",
				name: "Europe",
			},
			{
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
				id: "mena",
				name: "MENA",
			},
		],
	},
	component: MenuButton,
	render: (args) => {
		return (
			<MenuButton {...args}>
				<Button appearance="secondary" size="square_md">
					<Icon icon={faBars} />
				</Button>
			</MenuButton>
		);
	},
	title: "MenuButton",
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
