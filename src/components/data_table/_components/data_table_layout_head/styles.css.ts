import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tHeadStyles, thStyles } from "../../../../styles/stylesheet.css";
import { vars } from "../../../../styles/theme.css";

const baseHeadStyle = style({});

const hasRowActions = styleVariants({
	true: {},
	false: {},
});

export const getHeadStyle = recipe({
	base: [baseHeadStyle, tHeadStyles],
	variants: {
		hasRowActions,
	},
});

globalStyle(
	`${hasRowActions.true} th:last-child, ${hasRowActions.true} ${thStyles}:last-child`,
	{
		width: vars.spacing.space_1,
	},
);
