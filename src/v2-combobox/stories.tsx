import { ComboBox } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/V2/ComboBox",
	component: ComboBox,
	args: {
		name: "country",
		comboBoxProps: {
			formValue: "text",
			defaultItems: [
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
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
