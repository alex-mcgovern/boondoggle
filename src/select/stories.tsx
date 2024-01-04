import { Select, SelectButton } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { FlagFr } from "../__DONE__icon-flag/fr";
import { FlagDe } from "../__DONE__icon-flag/de";
import { FlagEs } from "../__DONE__icon-flag/es";
import { FlagAe } from "../__DONE__icon-flag/ae";
import { FlagSa } from "../__DONE__icon-flag/sa";
import { FlagOm } from "../__DONE__icon-flag/om";

const meta = {
	title: "Components/Select",
	component: Select,
	args: {
		placeholder: "Select a country",
		items: [
			{
				name: "Europe",
				id: "europe",
				children: [
					{
						id: "france",
						name: "France",
						slotLeft: <FlagFr height="space_4" width="space_4" />,
					},
					{
						id: "germany",
						name: "Germany",
						slotLeft: <FlagDe height="space_4" width="space_4" />,
					},
					{
						id: "spain",
						name: "Spain",
						slotLeft: <FlagEs height="space_4" width="space_4" />,
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
						slotLeft: <FlagAe height="space_4" width="space_4" />,
					},
					{
						id: "saudi_arabia",
						name: "Saudi Arabia",
						slotLeft: <FlagSa height="space_4" width="space_4" />,
					},
					{
						id: "oman",
						name: "Oman",
						slotLeft: <FlagOm height="space_4" width="space_4" />,
					},
				],
			},
		],
	},
	render: (args) => {
		return (
			<Select {...args}>
				<SelectButton />
			</Select>
		);
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Borderless: Story = {
	render: (args) => {
		return (
			<Select {...args}>
				<SelectButton variant="borderless" />
			</Select>
		);
	},
};
