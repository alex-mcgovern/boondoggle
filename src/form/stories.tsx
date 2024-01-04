import { Form } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import {
	FormTextField,
	TextFieldVisibilityButton,
} from "../__DONE__text-field";
import { Input } from "../__DONE__input";
import { ToastProvider } from "../__DONE__toast";
import { Button } from "../__DONE__button";
import { sprinkles } from "../__DONE__sprinkles/index.css";
import { Label } from "../__DONE__label";
import { TextArea } from "../__DONE__text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComboBoxButton, FormComboBox } from "../__DONE__combobox";
import { Group } from "../__DONE__group";
import { FormComboBoxCountry } from "../__DONE__combo-box-country";
import {
	FormNumberField,
	NumberFieldDecrementButton,
	NumberFieldIncrementButton,
} from "../number-field";
import { FormSelect, SelectButton } from "../select";
import { FlagEu } from "../__DONE__icon-flag/eu";
import { FlagGb } from "../__DONE__icon-flag/gb";
import { FlagUs } from "../__DONE__icon-flag/us";
import * as React from "react";

/** -----------------------------------------------------------------------------
 * @example Composition of `NumberField` with `Select` for currency selection
 * ------------------------------------------------------------------------------- */

const NumberFieldWithCurrencySelect = () => {
	const [currency, setCurrency] = React.useState<"EUR" | "USD" | "GBP">(
		"EUR",
	);

	return (
		<div
			className={sprinkles({
				marginBottom: "space_2",
			})}
		>
			<Label htmlFor="amount">Amount</Label>
			<div
				className={sprinkles({
					display: "flex",
					alignItems: "start",
					gap: "space_2",
				})}
			>
				<FormNumberField
					name="amount"
					id="amount"
					className={sprinkles({ width: "100%" })}
					formatOptions={{
						currency,
						style: "currency",
						currencyDisplay: "code",
					}}
				>
					<Input />
				</FormNumberField>

				<FormSelect<"EUR" | "USD" | "GBP">
					selectedKey={currency}
					aria-label="Currency"
					placement="bottom end"
					onSelectionChange={(k) => {
						setCurrency(k as typeof currency);
					}}
					name="currency"
					items={[
						{
							id: "EUR",
							name: "EUR",
							slotLeft: (
								<FlagEu height="space_4" width="space_4" />
							),
						},
						{
							id: "USD",
							name: "USD",
							slotLeft: (
								<FlagUs height="space_4" width="space_4" />
							),
						},
						{
							id: "GBP",
							name: "GBP",
							slotLeft: (
								<FlagGb height="space_4" width="space_4" />
							),
						},
					]}
				>
					<SelectButton />
				</FormSelect>
			</div>
		</div>
	);
};

/** -----------------------------------------------------------------------------
 * Stories
 * ------------------------------------------------------------------------------- */

const meta = {
	component: Form,
	title: "Data entry/Form",
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
					{/** --------------------------------------------
					 * @example Text field
					 * ----------------------------------------------- */}

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="full_name"
					>
						<Label>Full name</Label>
						<Input />
					</FormTextField>

					{/** --------------------------------------------
					 * @example Text field with email validation
					 * ----------------------------------------------- */}

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="email_address"
						type="email"
						autoComplete="off"
					>
						<Label>Email address</Label>
						<Input />
					</FormTextField>

					{/** --------------------------------------------
					 * @example Text field with visibility toggle
					 * ----------------------------------------------- */}

					<FormTextField
						className={sprinkles({ marginBottom: "space_2" })}
						name="password"
						type="password"
						autoComplete="off"
					>
						<Label>Password</Label>
						<Group>
							<Input />
							<TextFieldVisibilityButton />
						</Group>
					</FormTextField>

					{/** --------------------------------------------
					 * @example Number field
					 * ----------------------------------------------- */}

					<FormNumberField
						className={sprinkles({ marginBottom: "space_2" })}
						name="count"
						step={100}
					>
						<Label>Count</Label>
						<Group>
							<Input />
							<NumberFieldDecrementButton />
							<NumberFieldIncrementButton />
						</Group>
					</FormNumberField>

					{/** --------------------------------------------
					 * @example Number field with currency select
					 * ----------------------------------------------- */}

					<NumberFieldWithCurrencySelect />

					{/** --------------------------------------------
					 * @example Combobox
					 * ----------------------------------------------- */}

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

					{/** --------------------------------------------
					 * @example Combobox with country list
					 * ----------------------------------------------- */}

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

					{/** --------------------------------------------
					 * @example Text area
					 * ----------------------------------------------- */}

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
				full_name: z.string().min(1).max(30),
				email_address: z.string().email(),
				favourite_food: z.enum([
					"apple",
					"tomato",
					"carrot",
					"lettuce",
				]),
				password: z.string(),
				count: z.number(),
				amount: z.number(),
				currency: z.enum(["EUR", "USD", "GBP"]),
				country: z.string(),
				description: z.string().min(1).max(20),
			}),
		),
	},
};
