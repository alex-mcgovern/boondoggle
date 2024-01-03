import { CountryComboBox } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/V2/CountryComboBox",
	component: CountryComboBox,
	args: {
		label: {
			text: "Country",
			tooltip: "Select a country",
		},
		name: "country",
		comboBoxProps: {},
	},
} satisfies Meta<typeof CountryComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
