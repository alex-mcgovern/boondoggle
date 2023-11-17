import { style } from "@vanilla-extract/css";
import { a11yFocus, utilCss, vars } from "../index.css";
import { withPrefersMotion } from "../css-utils";

export const radioButtonWrapperStyles = style([
	utilCss({
		alignItems: "start",
		borderRadius: "sm",
		display: "flex",
		gap: "space_2",
	}),
]);

export const radioButtonInputStyles = style([
	a11yFocus,
	utilCss({ borderRadius: "50%", marginTop: "space_2" }),
]);

export const radioButtonLabelStyles = style([
	{
		...withPrefersMotion({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		accentColor: vars.color.button_default,
		selectors: {
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
]);
