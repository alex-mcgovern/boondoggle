import { style } from "@vanilla-extract/css";
import { focusStyleRule, focus, motion, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

export const radioButtonCardInputStyles = style({
	position: "absolute",
	right: v.spacing.space_4,
	selectors: {
		"&:focus, &:focus-visible": {
			outline: "none",
		},
	},
	top: v.spacing.space_4,
});

export const radioButtonCardLabelStyles = style([
	focus,
	css({
		alignItems: "center",
		aspectRatio: "square",
		border: "border_default",
		borderRadius: "sm",
		display: "flex",
		gap: "space_4",
		justifyContent: "center",
		padding: "space_4",
		width: "100%",
	}),
	{
		...motion({
			transition: `border-color ${v.duration.short} ease, background ${v.duration.short} ease`,
		}),
		accentColor: v.color.btn_default,
		maxWidth: "12rem",
		selectors: {
			"&:has(input:checked)": {
				background: v.color.tint_default,
				border: `1px solid ${v.color.border_hover}`,
			},
			"&:has(input:focus)": {
				...focusStyleRule,
				border: `1px solid ${v.color.btn_default}`,
			},
			"&:hover": {
				background: v.color.tint_default,
				border: `1px solid ${v.color.border_hover}`,
				cursor: "pointer",
			},
		},
	},
]);
