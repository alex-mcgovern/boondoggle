import { Form } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { FormTextField } from "../text-field";
import { Input } from "../input";
import { ToastProvider } from "../toast";
import { Button } from "../__DONE__button";
import { sprinkles } from "../sprinkles/index.css";
import { Label } from "../label";
import { TextArea } from "../text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const meta = {
	component: Form,
	title: "Data entry/Form ✅",
	args: {
		handleSubmit: (fieldValues) => {
			alert(
				`Form submitted successfully \n ${JSON.stringify(fieldValues)}`,
			);
		},
		className: sprinkles({ width: "main_sm" }),
	},
	render: (args) => {
		return (
			<Form {...args}>
				<>
					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="first_name"
					>
						{({ ref }) => {
							return (
								<>
									<Label>First name</Label>
									<Input ref={ref} />
								</>
							);
						}}
					</FormTextField>

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="last_name"
					>
						<Label>Last name</Label>
						<Input />
					</FormTextField>

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="email_address"
					>
						<Label>Email address</Label>
						<Input />
					</FormTextField>

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="description"
					>
						<Label>Description of your issue</Label>
						<TextArea />
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
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithZod: Story = {
	args: {
		resolver: zodResolver(
			z.object({
				first_name: z.string().min(1).max(10),
				last_name: z.string().min(1).max(10),
				email_address: z.string().email(),
				date_of_birth: z.string(),
				address_line_1: z.string().min(1).max(10),
				address_line_2: z.string().min(1).max(10),
				address_line_3: z.string().min(1).max(10),
				address_line_4: z.string().min(1).max(10),
				description: z.string().min(1).max(20),
				additional_info: z.string().min(1).max(20),
			}),
		),
	},
};
