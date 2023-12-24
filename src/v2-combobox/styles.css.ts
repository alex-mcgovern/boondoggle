import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import { HOVER, a11yDisabled, variantColorOverlay, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const comboBoxCSS = recipe({
	base: [],
	variants: {
		isDisabled: {
			true: [a11yDisabled],
			false: [],
		},
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});

export const comboBoxButtonCSS = style([
	sprinkles({
		width: "space_8",
		height: "space_8",
		aspectRatio: "square",
		flexShrink: "0",
		flexGrow: "0",
		color: "text_low_contrast",
	}),
	withPrefersMotion({
		transitionProperty: "color",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		selectors: {
			[`&${HOVER}`]: {
				color: vars.color.text_high_contrast,
			},
		},
	},
]);
