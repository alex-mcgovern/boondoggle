import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import {
	elementHeight,
	elementPaddingRaw,
} from "../../src/styles/common/element_size.css";
import { disabled, focus, motion, theme, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";
const selectItemSize = styleVariants({
	lg: [
		{ minHeight: elementHeight.lg },
		{
			padding: `${elementPaddingRaw.lg.y} ${calc.subtract(
				elementPaddingRaw.lg.x,
				v.spacing.space_1,
			)}`,
		},
	],
	md: [
		{ minHeight: elementHeight.md },
		{
			padding: `${elementPaddingRaw.md.y} ${calc.subtract(
				elementPaddingRaw.md.x,
				v.spacing.space_1,
			)}`,
		},
	],
	sm: [
		{ minHeight: elementHeight.sm },
		{
			padding: `${elementPaddingRaw.sm.y} ${calc.subtract(
				elementPaddingRaw.sm.x,
				v.spacing.space_1,
			)}`,
		},
	],
});

export const getSelectItemStyles = recipe({
	base: [
		css({
			alignItems: "center",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "flex",
			fontStyle: "bodyMd",
			fontWeight: "regular",
			gap: "space_2",
			margin: "none",
			textAlign: "left",
			textDecoration: "none",
			width: "100%",
		}),
		disabled,
		focus,
		motion({
			transition: `background ${v.duration.short} ease`,
		}),
		{
			selectors: {
				"&:hover": {
					cursor: "pointer",
				},
			},
		},
	],
	variants: {
		theme,
		size: selectItemSize,
	},
});

export const isHighlightedStyle = style([
	{
		background: v.color.tint_active,
	},
]);
