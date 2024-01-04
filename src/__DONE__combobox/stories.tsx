import { ComboBox, ComboBoxButton } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Group } from "../__DONE__group";
import { Input } from "../__DONE__input";
import { Label } from "../label";

const meta = {
	title: "Data entry/ComboBox",
	component: ComboBox,
	args: {
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
	render: (args) => {
		return (
			<ComboBox {...args}>
				<Label>Country/Region</Label>
				<Group>
					<Input />
					<ComboBoxButton />
				</Group>
			</ComboBox>
		);
	},
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
