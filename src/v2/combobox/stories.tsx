import { ComboBox } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Data entry/ComboBox",
	component: ComboBox,
	args: {
		label: {
			text: "Country",
			tooltip: "Select a country",
		},
		name: "country",
		comboBoxProps: {
			onSelectionChange: (key) => {
				alert(`onSelectionChange: ${key}`);
			},
			formValue: "text",
			defaultItems: [
				{
					name: "Europe",
					id: "europe",
					children: [
						{
							id: "france",
							name: "France",
							description: "This is a description",
						},
						{
							id: "germany",
							name: "Germany",
							description: "This is a description",
						},
						{
							id: "spain",
							name: "Spain",
							description: "This is a description",
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
							description: "This is a description",
						},
						{
							id: "saudi_arabia",
							name: "Saudi Arabia",
							description: "This is a description",
						},
						{
							id: "oman",
							name: "Oman",
							description: "This is a description",
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

export const KitchenSink: Story = {
	args: {
		description: "This is a description",
		errorMessage: "This is an error message",
		comboBoxProps: {
			...meta.args.comboBoxProps,
			disabledKeys: ["france"],
		},
	},
};

export const KitchenSinkInvalid: Story = {
	args: {
		description: "This is a description",
		errorMessage: "This is an error message",
		comboBoxProps: {
			...meta.args.comboBoxProps,
			disabledKeys: ["france"],
			isInvalid: true,
		},
	},
};
