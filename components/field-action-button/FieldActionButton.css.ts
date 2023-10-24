import { style } from "@vanilla-extract/css";
import { a11yFocus } from "../../src/styles/common/a11y.css";
import { vars } from "../../src/styles/theme.css";
import { createAccessibleTransition } from "../../src/styles/utils/create_accessible_transition";

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
