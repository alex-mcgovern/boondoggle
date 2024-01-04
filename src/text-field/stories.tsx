import {
	TextField,
	TextFieldClearButton,
	TextFieldCopyButton,
	TextFieldVisibilityButton,
} from ".";
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "../toast";
import { Group } from "../__DONE__group";
import { Input } from "../input";
import { Label } from "../label";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../_DEPRECATED_tooltip";
import { Icon } from "../__DONE__icon";
import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons/faInfoCircle";
import * as React from "react";
import { Button } from "../__DONE__button";
import { sprinkles } from "../sprinkles/index.css";

const meta = {
	title: "Data entry/TextField",
	component: TextField,
	args: {},
	render: (args) => {
		return (
			<TextField {...args}>
				<Label>Label</Label>
				<Input />
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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
};

export const WithLabelTooltip: Story = {
	render: (args) => {
		return (
			<TextField {...args}>
				<Label>
					Label
					<Tooltip placement="right">
						<TooltipTrigger asChild>
							<button type="button">
								<Icon
									color="text_low_contrast"
									icon={faInfoCircle}
								/>
							</button>
						</TooltipTrigger>
						<TooltipContent>
							Provide additional info about the field
						</TooltipContent>
					</Tooltip>
				</Label>
				<Input />
			</TextField>
		);
	},
};

export const TypePassword: Story = {
	args: {
		type: "password",
		value: "Hello world",
	},
	render: (args) => {
		return (
			<TextField {...args}>
				<Label>Label</Label>
				<Group>
					<Input />
					<TextFieldVisibilityButton />
				</Group>
			</TextField>
		);
	},
};

export const TestRef: Story = {
	args: {
		value: "Hello world",
	},
	render: (args) => {
		const ref = React.useRef<HTMLInputElement>(null);

		return (
			<>
				<TextField
					{...args}
					className={sprinkles({ marginBottom: "space_2" })}
					ref={ref}
				>
					<Label>Label</Label>
					<Input />
				</TextField>
				<Button
					appearance="secondary"
					className={sprinkles({ width: "100%" })}
					onPress={() => {
						console.log(ref.current);
						ref.current?.focus();
					}}
				>
					Focus field
				</Button>
			</>
		);
	},
};

export const KitchenSink: Story = {
	args: {
		value: "Hello world",
	},
	render: (args) => {
		return (
			<TextField {...args}>
				<Label>Label</Label>
				<Group>
					<Input />
					<TextFieldClearButton />
					<TextFieldCopyButton />
					<TextFieldVisibilityButton />
				</Group>
			</TextField>
		);
	},
};
