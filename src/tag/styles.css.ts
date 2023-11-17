import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
	a11yFocus,
	createAccessibleTransition,
	utilCss,
	variantColorOverlay,
	vars,
} from "../index.css";

const tagSize = styleVariants({
	lg: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	md: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
	sm: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
});

export const getTagStyle = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "tint_default",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "inline-flex",
			flexShrink: "0",
			gap: "space_1",
			paddingX: "space_2",
			paddingY: "space_1",
			textDecoration: "none",
			whiteSpace: "nowrap",
			width: "max-content",
		}),
		a11yFocus,
		createAccessibleTransition({
			transition: `ease ${vars.transitionDuration.short} ease`,
			transitionProperty: "color, background-color, border-color",
		}),
		{
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
					background: vars.color.tint_active,
					color: vars.color.text_high_contrast,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
		size: tagSize,
	},
});
