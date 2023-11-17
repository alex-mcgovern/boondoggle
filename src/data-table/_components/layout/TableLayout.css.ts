import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../css-utils";
import {
	tBodyStyles,
	tRowStyles,
	tdStyles,
	utilCss,
	vars,
} from "../../../index.css";

const baseBodyStyle = style({});

const isSelectable = styleVariants({
	true: {},
	false: {},
});

const hasRowActions = styleVariants({
	true: {},
	false: {},
});

export const getBodyStyle = recipe({
	base: [baseBodyStyle, tBodyStyles],
	variants: {
		isSelectable,
		hasRowActions,
	},
});

globalStyle(
	`${isSelectable.true} td:first-child, ${isSelectable.true} ${tdStyles}:first-child`,
	{
		width: vars.spacing.space_1,
	},
);

globalStyle(
	`${hasRowActions.true} td:last-child, ${hasRowActions.true} ${tdStyles}:last-child`,
	{
		width: calc.add(
			calc.multiply(vars.spacing.space_5, 2),
			vars.spacing.space_12,
		),
		overflow: "visible",
	},
);

const baseRowStyles = style({});

export const rowStyles = style([
	tRowStyles,
	baseRowStyles,
	utilCss({
		color: "text_high_contrast",
		textDecoration: "none",
	}),
	{
		selectors: {
			"&:hover": {
				backgroundColor: vars.color.tint_default,
			},
		},
		...withPrefersMotion({
			transition: `background-color ${vars.transitionDuration.medium} ease`,
		}),
	},
]);
