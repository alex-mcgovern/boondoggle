import * as React from "react";
import { LOREM } from "../../mocks/LOREM.mock";
import { RadioButton } from "../radio-button";

export const RADIO_BUTTONS_MOCK: Array<
	React.ComponentProps<typeof RadioButton>
> = [
	{
		description: LOREM.text_xxs,
		title: "Radio item 1",
		value: "radio_item_1",
		name: "radio_item_1",
	},
	{
		description: LOREM.text_xxs,
		title: "Radio item 2",
		value: "radio_item_2",
		name: "radio_item_2",
	},
	{
		description: LOREM.text_xxs,
		title: "Radio item 3",
		value: "radio_item_3",
		name: "radio_item_3",
	},
];
