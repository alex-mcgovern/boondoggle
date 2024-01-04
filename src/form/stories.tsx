import { Form } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { FormTextField } from "../__DONE__text-field";
import { Input } from "../__DONE__input";
import { ToastProvider } from "../__DONE__toast";
import { Button } from "../__DONE__button";
import { sprinkles } from "../__DONE__sprinkles/index.css";
import { Label } from "../label";
import { TextArea } from "../__DONE__text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComboBoxButton, FormComboBox } from "../__DONE__combobox";
import { Group } from "../__DONE__group";
import { FormComboBoxCountry } from "../__DONE__combo-box-country";

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
						<Label>First name</Label>
						<Input />
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
						type="email"
					>
						<Label>Email address</Label>
						<Input />
					</FormTextField>

					<FormComboBox<"apple" | "tomato" | "carrot" | "lettuce">
						className={sprinkles({ marginBottom: "space_2" })}
						name="favourite_food"
						defaultItems={[
							{
								name: "Fruits",
								id: "fruits",
								children: [
									{
										id: "apple",
										name: "Apple",
									},
									{
										id: "tomato",
										name: "Tomato",
										description: "Yes, it's a fruit",
									},
								],
							},
							{
								name: "Vegetables",
								id: "vegetables",
								children: [
									{
										id: "carrot",
										name: "Carrot",
									},
									{
										id: "lettuce",
										name: "Lettuce",
									},
								],
							},
						]}
					>
						<Label>Favourite food</Label>
						<Group>
							<Input placeholder="Select a food..." />
							<ComboBoxButton />
						</Group>
					</FormComboBox>

					<FormComboBoxCountry
						className={sprinkles({ marginBottom: "space_2" })}
						name="country"
					>
						<Label>Country</Label>
						<Group>
							<Input placeholder="Select a country..." />
							<ComboBoxButton />
						</Group>
					</FormComboBoxCountry>

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
				favourite_food: z.union([
					z.literal("apple"),
					z.literal("tomato"),
					z.literal("carrot"),
					z.literal("lettuce"),
				]),
				country: z.string(),
				description: z.string().min(1).max(20),
			}),
		),
	},
};
