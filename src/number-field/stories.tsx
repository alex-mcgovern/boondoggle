import {
	NumberField,
	NumberFieldDecrementButton,
	NumberFieldIncrementButton,
} from ".";
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "../__DONE__toast";
import { Group } from "../__DONE__group";
import { Input } from "../__DONE__input";
import { Label } from "../__DONE__label";
import React from "react";
import { FlagEu } from "../__DONE__icon-flag/eu";
import { FlagGb } from "../__DONE__icon-flag/gb";
import { FlagUs } from "../__DONE__icon-flag/us";
import { sprinkles } from "../__DONE__sprinkles/index.css";
import { Select, SelectButton } from "../select";

const meta = {
	title: "Data entry/NumberField",
	component: NumberField,
	args: {},
	render: (args) => {
		return (
			<NumberField {...args}>
				<Label>Label</Label>
				<Input />
			</NumberField>
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
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
};

export const KitchenSink: Story = {
	args: {
		defaultValue: 42000.69,
	},
	render: (args) => {
		return (
			<NumberField {...args}>
				<Label>Label</Label>
				<Group>
					<NumberFieldDecrementButton />
					<Input />
					<NumberFieldIncrementButton />
				</Group>
			</NumberField>
		);
	},
};

export const ExampleComposedCurrencyField: Story = {
	args: {
		defaultValue: 42000.69,
		name: "amount",
		id: "amount",
	},
	render: () => {
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
						alignItems: "center",
						gap: "space_2",
					})}
				>
					<NumberField
						name="amount"
						id="amount"
						defaultValue={42000.69}
						formatOptions={{
							currency,
							style: "currency",
							currencyDisplay: "code",
						}}
					>
						<Input />
					</NumberField>

					<Select<"EUR" | "USD" | "GBP">
						selectedKey={currency}
						aria-label="Currency"
						placement="bottom end"
						onSelectionChange={(k) => {
							setCurrency(k);
						}}
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
					</Select>
				</div>
			</div>
		);
	},
};
