import { style } from "@vanilla-extract/css";
import { ACTIVE, FOCUS, vars } from "../index.css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const inputBg = style([
	sprinkles({
		background: "text_field_background",
	}),
	{
		selectors: {
			[`&:${ACTIVE}`]: {
				background: vars.color.text_field_background_highlighted,
			},
			[`&:${FOCUS}`]: {
				background: vars.color.text_field_background_highlighted,
			},
		},
	},
]);
