import { style } from "@vanilla-extract/css";
import { a11yFocus, vars } from "../index.css";
import { withPrefersMotion } from "../css-utils";

export const fieldActionButtonStyle = style([
	a11yFocus,
	{
		borderRadius: vars.borderRadius.sm,
		color: vars.color.text_low_contrast,
		pointerEvents: "all",
		selectors: {
			"&:hover": {
				color: vars.color.text_high_contrast,
				...withPrefersMotion({
					transition: `ease ${vars.transitionDuration.short} ease`,
					transitionProperty: "color",
				}),
			},
		},
	},
]);
