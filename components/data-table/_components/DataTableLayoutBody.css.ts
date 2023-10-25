import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { motion, tBody, tRow, td, v } from "../../../style.css";
import { css } from "../../../src/styles/utils/util_css.css";
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
	base: [baseBodyStyle, tBody],
	variants: {
		isSelectable,
		hasRowActions,
	},
});

globalStyle(
	`${isSelectable.true} td:first-child, ${isSelectable.true} ${td}:first-child`,
	{
		width: v.spacing.space_1,
	},
);

globalStyle(
	`${hasRowActions.true} td:last-child, ${hasRowActions.true} ${td}:last-child`,
	{
		width: v.spacing.space_1,
	},
);

const baseRowStyles = style({});

export const rowStyles = style([
	tRow,
	baseRowStyles,
	css({
		color: "text_high_contrast",
		textDecoration: "none",
	}),
	{
		selectors: {
			"&:hover": {
				backgroundColor: v.color.tint_default,
			},
		},
		...motion({
			transition: `background-color ${v.duration.medium} ease`,
		}),
	},
]);
