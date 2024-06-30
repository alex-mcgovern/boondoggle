import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "..";
import { Label } from "../../label";
import { TextFieldRoot } from "../../text-field";

const meta = {
	args: {},
	component: TextArea,
	render: (args) => {
		return (
			<TextFieldRoot>
				<Label>Description of your issue</Label>
				<TextArea {...args} />
			</TextFieldRoot>
		);
	},
	title: "TextArea",
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
