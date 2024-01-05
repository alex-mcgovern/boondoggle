import { Meta, StoryObj } from "@storybook/react";
import { SearchField, SearchFieldIcon } from ".";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
	title: "SearchField",
	component: SearchField,
	args: {},
	render: (args) => {
		return (
			<SearchField {...args}>
				<SearchFieldIcon />
				<Label>Label</Label>
				<Input />
			</SearchField>
		);
	},
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
