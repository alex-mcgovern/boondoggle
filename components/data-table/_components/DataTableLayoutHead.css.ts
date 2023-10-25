import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tHead, th, v } from "../../../style.css";
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
	base: [baseHeadStyle, tHead],
	variants: {
		isSelectable,
		hasRowActions,
	},
});

globalStyle(
	`${isSelectable.true} th:first-child, ${isSelectable.true} ${th}:first-child`,
	{
		width: v.spacing.space_1,
	},
);

globalStyle(
	`${hasRowActions.true} th:last-child, ${hasRowActions.true} ${th}:last-child`,
	{
		width: v.spacing.space_1,
	},
);
