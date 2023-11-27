import { Meta, StoryObj } from "@storybook/react";
import { V2InputCurrency as StoryComp } from ".";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";

const meta = {
	title: "Components/V2InputCurrency",
	component: StoryComp,
	args: {
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
		labelConfig: {
			label: "Amount",
			labelTooltip: "Please enter an amount",
		},
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
export const WithLabel: Story = {
	args: {
		labelConfig: {
			label: "Amount",
		},
	},
};

export const WithLabelTooltip: Story = {
	args: {
		labelConfig: {
			label: "Amount",
			labelTooltip: "Please enter an amount",
		},
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
