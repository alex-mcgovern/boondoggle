import { Meta, StoryObj } from "@storybook/react";
import { V2InputCurrency as StoryComp } from ".";
import { FlagEu } from "../__DONE__icon-flag/eu";
import { FlagGb } from "../__DONE__icon-flag/gb";
import { FlagUs } from "../__DONE__icon-flag/us";

const meta = {
	title: "Data entry/InputCurrency",
	component: StoryComp,
	args: {
		label: "Amount",
		name: "amount",
		currencyConfig: {
			initialCurrency: "EUR",
			isCurrencyEditable: false,
			initialCurrencyIcon: <FlagEu height="space_4" width="space_4" />,
		},
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
	args: {
		defaultValue: 420000.69,
	},
};

export const Invalid: Story = {
	args: {
		isInvalid: true,
		errorMessage: "Please enter a valid amount",
		currencyConfig: {
			initialCurrency: "EUR",
			initialCurrencyIcon: <FlagEu height="space_4" width="space_4" />,
			onCurrencyChange: (n) => {
				alert(n);
			},
			isCurrencyEditable: true,
			items: [
				{
					id: "EUR",
					name: "EUR",
					slotLeft: <FlagEu height="space_4" width="space_4" />,
				},
				{
					id: "USD",
					name: "USD",
					slotLeft: <FlagUs height="space_4" width="space_4" />,
				},
				{
					id: "GBP",
					name: "GBP",
					slotLeft: <FlagGb height="space_4" width="space_4" />,
				},
			],
		},
	},
};

export const SizeMd: Story = {
	args: {
		size: "md",
	},
};
export const SizeLg: Story = {
	args: {
		size: "lg",
	},
};

export const IsCurrencyEditable: Story = {
	args: {
		currencyConfig: {
			initialCurrency: "EUR",
			initialCurrencyIcon: <FlagEu height="space_4" width="space_4" />,
			onCurrencyChange: (n) => {
				alert(n);
			},
			isCurrencyEditable: true,
			items: [
				{
					id: "EUR",
					name: "EUR",
					slotLeft: <FlagEu height="space_4" width="space_4" />,
				},
				{
					id: "USD",
					name: "USD",
					slotLeft: <FlagUs height="space_4" width="space_4" />,
				},
				{
					id: "GBP",
					name: "GBP",
					slotLeft: <FlagGb height="space_4" width="space_4" />,
				},
			],
		},
	},
};
