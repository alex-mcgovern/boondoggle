import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
	NumberField,
	NumberFieldDecrementButton,
	NumberFieldIncrementButton,
} from ".";
import { Group } from "../group";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import { Select, SelectButton } from "../select";
import { sprinkles } from "../sprinkles/index.css";
import { ToastProvider } from "../toast";

const meta = {
	title: "NumberField",
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
							setCurrency(k as typeof currency);
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
