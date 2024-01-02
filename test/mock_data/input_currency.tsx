import { SelectItemShape } from "../../src/v1/select/types";
import { FlagAe } from "../../src/v2/icon-flag/ae";
import { FlagKw } from "../../src/v2/icon-flag/kw";
import { FlagOm } from "../../src/v2/icon-flag/om";
import { FlagSa } from "../../src/v2/icon-flag/sa";
import { FlagUs } from "../../src/v2/icon-flag/us";

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
