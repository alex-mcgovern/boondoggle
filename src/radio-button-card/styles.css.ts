import { style } from "@vanilla-extract/css";
import { withPrefersMotion } from "../css-utils";
import { a11yFocus, a11yFocusStyleRule, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const radioButtonCardInputStyles = style({
	position: "absolute",
	right: vars.spacing.space_4,
	selectors: {
		"&:focus, &:focus-visible": {
			outline: "none",
		},
	},
	top: vars.spacing.space_4,
});

export const radioButtonCardLabelStyles = style([
	a11yFocus,
	sprinkles({
		alignItems: "center",
		// aspectRatio: "square",
		border: "border_1",
		borderRadius: "sm",
		display: "flex",
		gap: "space_4",
		flexShrink: "1",
		flexGrow: "1",
		justifyContent: "center",
		padding: "space_4",
		// width: "100%",
	}),
	{
		...withPrefersMotion({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		accentColor: vars.color.button_default,
		// maxWidth: "12rem",
		selectors: {
			"&:has(input:checked)": {
				background: vars.color.tint_2,
				border: `1px solid ${vars.color.border_2}`,
			},
			"&:has(input:focus)": {
				...a11yFocusStyleRule,
				border: `1px solid ${vars.color.button_default}`,
			},
			"&:hover": {
				background: vars.color.tint_2,
				border: `1px solid ${vars.color.border_2}`,
				cursor: "pointer",
			},
		},
	},
]);
