import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { elementPaddingRaw, utilCss, vars } from "../../index.css";

const groupTitleSize = styleVariants({
	lg: {
		paddingLeft: calc.subtract(
			elementPaddingRaw.lg.x,
			vars.spacing.space_1,
		),
		paddingRight: calc.subtract(
			elementPaddingRaw.lg.x,
			vars.spacing.space_1,
		),
	},
	md: {
		paddingLeft: calc.subtract(
			elementPaddingRaw.md.x,
			vars.spacing.space_1,
		),
		paddingRight: calc.subtract(
			elementPaddingRaw.md.x,
			vars.spacing.space_1,
		),
	},
	sm: {
		paddingLeft: calc.subtract(
			elementPaddingRaw.sm.x,
			vars.spacing.space_1,
		),
		paddingRight: calc.subtract(
			elementPaddingRaw.sm.x,
			vars.spacing.space_1,
		),
	},
});

export const getGroupTitle = recipe({
	base: [
		utilCss({
			color: "text_low_contrast",
			fontStyle: "bodySm",
			marginY: "space_2",
		}),
	],
	variants: {
		size: groupTitleSize,
	},
});

export const inner = style([
	utilCss({
		overflowY: "auto",
		padding: "space_1",
	}),
	{
		borderCollapse: "collapse",
		listStyle: "none",
		maxHeight: "15rem",
		minWidth: "10rem",
		selectors: {
			"&:empty": {
				display: "none",
			},
		},
	},
]);
