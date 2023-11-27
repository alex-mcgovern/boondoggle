import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
	a11yFocus,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const pillCSS = recipe({
	base: [
		sprinkles({
			display: "inline-flex",
			fontSize: "bodySm",
			alignItems: "center",
			justifyContent: "center",
			background: "tint_2",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "normal",
			textDecoration: "none",
			whiteSpace: "nowrap",
			paddingX: "space_1",
			paddingY: "space_1",
			height: "space_6",
			minWidth: "space_6",
		}),
		a11yFocus,
		withPrefersMotion({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		{
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
					background: vars.color.tint_4,
				},
				[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
					background: vars.color.tint_4,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
	},
});
