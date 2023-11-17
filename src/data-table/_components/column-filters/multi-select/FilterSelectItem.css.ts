import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { a11yFocusStyleRule, utilCss, vars } from "../../../../index.css";

export const selectItemLabel = style([
	utilCss({
		paddingX: "space_2",
		paddingY: "space_2",
		borderRadius: "md",
	}),
	{
		margin: `0 ${calc.multiply(vars.spacing.space_2, -1)}`,
		selectors: {
			"&:has(input:focus-visible)": {
				...a11yFocusStyleRule,
			},
			"&:hover": {
				cursor: "pointer",
				background: vars.color.tint_default,
			},
			"&:active": {
				cursor: "pointer",
				background: vars.color.tint_hover,
			},
		},
	},
]);

export const selectItemLabelText = style([
	utilCss({
		whiteSpace: "nowrap",
		overflow: "hidden",
	}),
	{
		textOverflow: "ellipsis",
	},
]);
