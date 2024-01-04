import {
	TextField,
	TextFieldClearButton,
	TextFieldCopyButton,
	TextFieldVisibilityButton,
} from ".";
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "../toast";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../_DEPRECATED_tooltip";
import { Icon } from "../icon";
import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons/faInfoCircle";

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
