import { V2InputCurrency as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { MOCK_CURRENCY_SELECT_ITEMS } from "../../test/mock_data/input_currency";
import { FlagEu } from "../icon-flag/eu";
import { FlagUs } from "../icon-flag/us";
import { FlagGb } from "../icon-flag/gb";

const meta = {
	title: "Components/V2InputCurrency",
	component: StoryComp,
	args: {
		currencyConfig: {
			currency: "EUR",
			isCurrencyEditable: false,
			currencyIcon: <FlagEu height="space_4" width="space_4" />,
		},
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsCurrencyEditable: Story = {
	args: {
		currencyConfig: {
			currency: "EUR",
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
		currencySelectItems: MOCK_CURRENCY_SELECT_ITEMS,
		isCurrencyEditable: true,
	},
};
