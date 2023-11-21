import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
	a11yFocus,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const getTagStyle = recipe({
	base: [
		sprinkles({
			fontStyle: "bodySm",
			alignItems: "center",
			background: "tint_2",
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
		withPrefersMotion({
			transition: `ease ${vars.transitionDuration.short} ease`,
			transitionProperty: "color, background-color, border-color",
		}),
		{
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
					background: vars.color.tint_4,
					color: vars.color.text_high_contrast,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
	},
});
