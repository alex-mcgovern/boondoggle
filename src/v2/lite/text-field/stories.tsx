import { TextField, TextFieldCopyButton, TextFieldGroup } from ".";

import { faker } from "@faker-js/faker";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ToastProvider } from "../../toast";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
	title: "Components/v2/lite/TextField",
	component: TextField,
	args: {},
	render: ({ children: _children, ...args }) => (
		<TextField {...args}>
			<Label>Label</Label>
			<Input />
		</TextField>
	),
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsDisabled: Story = {
	args: {
		isDisabled: true,
	},
};

export const IsInvalid: Story = {
	args: {
		isInvalid: true,
	},
};

export const CopyButton: Story = {
	args: {
		defaultValue: faker.string.alphanumeric(10),
	},
	render: ({ children: _children, ...args }) => {
		const inputRef = React.useRef<HTMLInputElement>(null);

		return (
			<TextField {...args}>
				<Label>Label</Label>
				<TextFieldGroup>
					<Input ref={inputRef} />
					<TextFieldCopyButton
						inputRef={inputRef}
						strCopy="Copy"
						strCopied="Copied"
					/>
				</TextFieldGroup>
			</TextField>
		);
	},
	decorators: [
		(Story) => {
			return (
				<ToastProvider>
					<Story />
				</ToastProvider>
			);
		},
	],
};
