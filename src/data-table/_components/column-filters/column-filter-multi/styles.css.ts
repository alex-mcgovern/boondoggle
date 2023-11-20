import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { a11yFocusStyleRule, vars } from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const activeFilterStringCSS = style([
	sprinkles({ display: "inline-block" }),
	{
		maxWidth: "5rem",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
]);

export const multiFilterListCSS = style([
	sprinkles({
		paddingX: "space_4",
	}),
	{
		maxHeight: "12.5rem",
		overflowY: "auto",
	},
]);

export const multiFilterItemCSS = style([
	sprinkles({
		paddingX: "space_2",
		paddingY: "space_1",
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

export const multiFilterItemTextCSS = style([
	sprinkles({
		whiteSpace: "nowrap",
		overflow: "hidden",
	}),
	{
		textOverflow: "ellipsis",
	},
]);