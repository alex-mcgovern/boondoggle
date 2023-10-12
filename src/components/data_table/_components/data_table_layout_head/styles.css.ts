import { style, styleVariants, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tHeadStyles, thStyles } from "../../../../styles/stylesheet.css";
import { vars } from "../../../../styles/theme.css";

const baseHeadStyle = style({});

const isSelectable = styleVariants({
	true: {},
	false: {},
});

const hasRowActions = styleVariants({
	true: {},
	false: {},
});

export const getHeadStyle = recipe({
	base: [baseHeadStyle, tHeadStyles],
	variants: {
		isSelectable,
		hasRowActions,
	},
});

globalStyle(
	`${isSelectable.true} th:first-child, ${isSelectable.true} ${thStyles}:first-child`,
	{
		width: vars.spacing.space_1,
	},
);

globalStyle(
	`${hasRowActions.true} th:last-child, ${hasRowActions.true} ${thStyles}:last-child`,
	{
		width: vars.spacing.space_1,
	},
);