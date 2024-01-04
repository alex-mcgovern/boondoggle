import { Form } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { FormTextField } from "../text-field";
import { Input } from "../input";
import { ToastProvider } from "../toast";
import { Button } from "../button";
import { sprinkles } from "../sprinkles/index.css";
import { Label } from "../label";

const meta = {
	component: Form,
	title: "Data entry/Form ✅",
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		handleSubmit: (fieldValues) => {
			alert(
				`Form submitted successfully \n ${JSON.stringify(fieldValues)}`,
			);
		},
	},
	render: (args) => {
		return (
			<Form {...args}>
				<>
					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						isRequired
						name="first_name"
					>
						<Label>First name</Label>
						<Input />
					</FormTextField>

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						isRequired
						name="last_name"
					>
						<Label>Last name</Label>
						<Input />
					</FormTextField>

					<Button
						className={sprinkles({ width: "100%" })}
						type="submit"
					>
						Submit
					</Button>
				</>
			</Form>
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
