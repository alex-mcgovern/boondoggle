import { SelectItemShape } from "../../src/_DEPRECATED_select/types";
import { FlagAe } from "../../src/icon-flag/ae";
import { FlagKw } from "../../src/icon-flag/kw";
import { FlagOm } from "../../src/icon-flag/om";
import { FlagSa } from "../../src/icon-flag/sa";
import { FlagUs } from "../../src/icon-flag/us";

export type MockCurrency = "USD" | "AED" | "OMR" | "SAR" | "KWD";
export type MockLocale = "en-US" | "en-GB" | "de-DE" | "fr-FR" | "ar-AE";

export const MOCK_CURRENCY_SELECT_ITEMS: Array<SelectItemShape<MockCurrency>> =
	[
		{
			label: "USD",
			slotLeft: <FlagUs height="space_4" width="space_4" />,
			value: "USD",
		},
		{
			label: "AED",
			slotLeft: <FlagAe height="space_4" width="space_4" />,
			value: "AED",
		},
		{
			label: "OMR",
			slotLeft: <FlagOm height="space_4" width="space_4" />,
			value: "OMR",
		},
		{
			label: "SAR",
			slotLeft: <FlagSa height="space_4" width="space_4" />,
			value: "SAR",
		},
		{
			label: "KWD",
			slotLeft: <FlagKw height="space_4" width="space_4" />,
			value: "KWD",
		},
	];

export const MOCK_LOCALE_SELECT_ITEMS: Array<SelectItemShape<MockLocale>> = [
	{
		label: "en-US",
		value: "en-US",
	},
	{
		label: "ar-AE",
		value: "ar-AE",
	},
	{
		label: "en-GB",
		value: "en-GB",
	},
	{
		label: "de-DE",
		value: "de-DE",
	},
	{
		label: "fr-FR",
		value: "fr-FR",
	},
];
