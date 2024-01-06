import type * as React from "react";

import type { RadioButton } from "../radio-button";

import { LOREM } from "../../mocks/LOREM.mock";

export const RADIO_BUTTONS_MOCK: Array<
	React.ComponentProps<typeof RadioButton>
> = [
	{
		description: LOREM.text_xxs,
		name: "radio_item_1",
		title: "Radio item 1",
		value: "radio_item_1",
	},
	{
		description: LOREM.text_xxs,
		name: "radio_item_2",
		title: "Radio item 2",
		value: "radio_item_2",
	},
	{
		description: LOREM.text_xxs,
		name: "radio_item_3",
		title: "Radio item 3",
		value: "radio_item_3",
	},
];
