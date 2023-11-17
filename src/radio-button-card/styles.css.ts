import { style } from "@vanilla-extract/css";
import { a11yFocus, a11yFocusStyleRule, utilCss, vars } from "../index.css";
import { withPrefersMotion } from "../css-utils";

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
	utilCss({
		alignItems: "center",
		// aspectRatio: "square",
		border: "border_default",
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
				background: vars.color.tint_default,
				border: `1px solid ${vars.color.border_hover}`,
			},
			"&:has(input:focus)": {
				...a11yFocusStyleRule,
				border: `1px solid ${vars.color.button_default}`,
			},
			"&:hover": {
				background: vars.color.tint_default,
				border: `1px solid ${vars.color.border_hover}`,
				cursor: "pointer",
			},
		},
	},
]);
