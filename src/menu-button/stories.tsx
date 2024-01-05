import { faBars } from "@fortawesome/pro-regular-svg-icons/faBars";
import { type Meta, type StoryObj } from "@storybook/react";
import { MenuButton } from ".";
import { Button } from "../button";
import { Icon } from "../icon";

const meta = {
	title: "MenuButton",
	component: MenuButton,
	args: {
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
	render: (args) => {
		return (
			<MenuButton {...args}>
				<Button appearance="secondary" size="square_md">
					<Icon icon={faBars} />
				</Button>
			</MenuButton>
		);
	},
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
