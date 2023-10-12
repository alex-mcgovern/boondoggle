import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
	elementHeight,
	elementPaddingRaw,
} from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const selectItemSize = styleVariants({
	lg: [
		{ minHeight: elementHeight.lg },
		{
			padding: `${elementPaddingRaw.lg.y} ${calc.subtract(
				elementPaddingRaw.lg.x,
				vars.spacing.space_1,
			)}`,
		},
	],
	md: [
		{ minHeight: elementHeight.md },
		{
			padding: `${elementPaddingRaw.md.y} ${calc.subtract(
				elementPaddingRaw.md.x,
				vars.spacing.space_1,
			)}`,
		},
	],
	sm: [
		{ minHeight: elementHeight.sm },
		{
			padding: `${elementPaddingRaw.sm.y} ${calc.subtract(
				elementPaddingRaw.sm.x,
				vars.spacing.space_1,
			)}`,
		},
	],
});

export const getSelectItemStyles = recipe({
	base: [
		getSprinkles({
			alignItems: "center",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "flex",
			fontStyle: "bodyMd",
			fontWeight: "normal",
			gap: "space_2",
			margin: "none",
			textAlign: "left",
			textDecoration: "none",
			width: "100%",
		}),
		a11yDisabled,
		a11yFocus,
		createAccessibleTransition({
			transition: `background ${vars.transitionDuration.short} ease`,
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
		colorOverlay: variantColorOverlay,
		size: selectItemSize,
	},
});

export const isHighlightedStyle = style([
	{
		background: vars.color.tint_active,
	},
]);
