import { style } from "@vanilla-extract/css";
import { ACTIVE, FOCUS, vars } from "../index.css";
import { sprinkles } from "../v1/sprinkles/index.css";

export const inputBg = style([
	sprinkles({
		background: "input_bg",
	}),
	{
		selectors: {
			[`&:${ACTIVE}`]: {
				background: vars.color.input_bg_highlighted,
			},
			[`&:${FOCUS}`]: {
				background: vars.color.input_bg_highlighted,
			},
		},
	},
]);
