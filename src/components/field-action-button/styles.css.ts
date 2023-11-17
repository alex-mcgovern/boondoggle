import { style } from "@vanilla-extract/css";
import { a11yFocus, vars, createAccessibleTransition } from "../../index.css";

export const fieldActionButtonStyle = style([
	a11yFocus,
	{
		borderRadius: vars.borderRadius.sm,
		color: vars.color.text_low_contrast,
		pointerEvents: "all",
		selectors: {
			"&:hover": {
				color: vars.color.text_high_contrast,
				...createAccessibleTransition({
					transition: `ease ${vars.transitionDuration.short} ease`,
					transitionProperty: "color",
				}),
			},
		},
	},
]);
