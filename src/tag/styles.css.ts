import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import { a11yFocus, variantColorOverlay, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const getTagStyle = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			display: "inline-flex",
			gap: "space_1",
			flexShrink: "0",

			width: "max-content",

			borderRadius: "md",

			fontStyle: "bodySm",
			textDecoration: "none",
			whiteSpace: "nowrap",

			color: "text_low_contrast",
			background: "tint_hover",

			paddingX: "space_2",
			paddingY: "space_1",
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
