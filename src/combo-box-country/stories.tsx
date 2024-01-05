import { Meta, StoryObj } from "@storybook/react";
import { ComboBoxCountry } from ".";
import { ComboBoxButton } from "../combobox";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";

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
