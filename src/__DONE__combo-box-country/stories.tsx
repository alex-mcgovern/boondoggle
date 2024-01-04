import { ComboBoxCountry } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Group } from "../__DONE__group";
import { Input } from "../__DONE__input";
import { Label } from "../__DONE__label";
import { ComboBoxButton } from "../__DONE__combobox";

const meta = {
	title: "Data entry/ComboBoxCountry",
	component: ComboBoxCountry,
	render: (args) => {
		return (
			<ComboBoxCountry {...args}>
				<Label>Country/Region</Label>
				<Group>
					<Input />
					<ComboBoxButton />
				</Group>
			</ComboBoxCountry>
		);
	},
} satisfies Meta<typeof ComboBoxCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
