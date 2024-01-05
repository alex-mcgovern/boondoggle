import { Meta, StoryObj } from "@storybook/react";
import { DatePicker, DatePickerButton } from ".";
import { DateInput } from "../date-input";
import { Group } from "../group";
import { Label } from "../label";

const meta = {
	title: "DatePicker",
	component: DatePicker,
	args: {
		onChange: (v) => {
			alert(v);
		},
	},
	render: (args) => (
		<DatePicker {...args}>
			<Label>Date</Label>
			<Group>
				<DateInput />
				<DatePickerButton />
			</Group>
		</DatePicker>
	),
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
