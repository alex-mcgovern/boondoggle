import { CountryComboBox } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Data entry/CountryComboBox",
	component: CountryComboBox,
	args: {
		label: "Country",
		name: "country",
		comboBoxProps: {},
	},
} satisfies Meta<typeof CountryComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
