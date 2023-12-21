import { sprinkles } from "../sprinkles/index.css";
import { withPrefersMotion } from "../css-utils";
import { HOVER, vars } from "../index.css";
import { style } from "@vanilla-extract/css";

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
