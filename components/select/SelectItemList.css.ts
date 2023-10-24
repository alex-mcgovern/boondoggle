import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { elementPaddingRaw } from "../../src/styles/common/element_size.css";
import { focus, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

const groupTitleSize = styleVariants({
	lg: {
		paddingLeft: calc.subtract(elementPaddingRaw.lg.x, v.spacing.space_1),
		paddingRight: calc.subtract(elementPaddingRaw.lg.x, v.spacing.space_1),
	},
	md: {
		paddingLeft: calc.subtract(elementPaddingRaw.md.x, v.spacing.space_1),
		paddingRight: calc.subtract(elementPaddingRaw.md.x, v.spacing.space_1),
	},
	sm: {
		paddingLeft: calc.subtract(elementPaddingRaw.sm.x, v.spacing.space_1),
		paddingRight: calc.subtract(elementPaddingRaw.sm.x, v.spacing.space_1),
	},
});

export const getGroupTitle = recipe({
	base: [
		css({
			color: "text_low_contrast",
			fontStyle: "bodySm",
			marginY: "space_2",
		}),
	],
	variants: {
		size: groupTitleSize,
	},
});

export const getOuter = recipe({
	base: [
		focus,
		css({
			background: "background",
			border: "border_default",
			borderRadius: "md",
			boxShadow: "md",
			minWidth: "100%",
			overflow: "hidden",
			width: "max-content",
		}),
		{ zIndex: "999" },
	],
	variants: {
		isOpen: {
			false: { display: "none" },
			true: {},
		},
	},
});

export const inner = style([
	css({
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
