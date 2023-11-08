import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import {
	tBodyStyles,
	tRowStyles,
	tdStyles,
} from "../../../../styles/stylesheet.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { utilCss } from "../../../../styles/utils/util_css.css";

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
		...createAccessibleTransition({
			transition: `background-color ${vars.transitionDuration.medium} ease`,
		}),
	},
]);
