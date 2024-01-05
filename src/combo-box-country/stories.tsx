import { ComboBoxCountry } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";
import { ComboBoxButton } from "../combobox";

const meta = {
	title: "ComboBoxCountry",
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
