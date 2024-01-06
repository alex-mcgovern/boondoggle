import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectButton } from ".";
import { FlagAe } from "../icon-flag/ae";
import { FlagDe } from "../icon-flag/de";
import { FlagEs } from "../icon-flag/es";
import { FlagFr } from "../icon-flag/fr";
import { FlagOm } from "../icon-flag/om";
import { FlagSa } from "../icon-flag/sa";

const meta = {
	args: {
		items: [
			{
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
				id: "europe",
				name: "Europe",
			},
			{
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
				id: "mena",
				name: "MENA",
			},
		],
		placeholder: "Select a country",
	},
	component: Select,
	render: (args) => {
		return (
			<Select {...args}>
				<SelectButton />
			</Select>
		);
	},
	title: "Select",
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
