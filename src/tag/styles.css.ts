import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../css-utils";
import { a11yFocus, variantColorOverlay, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const getTagStyle = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			background: "tint_hover",
			borderRadius: "md",
			color: "text_low_contrast",

			display: "inline-flex",

			flexShrink: "0",

			fontStyle: "bodySm",
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
	],

	variants: {
		colorOverlay: variantColorOverlay,
	},
});
