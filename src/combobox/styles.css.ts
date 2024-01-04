import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { inputBg } from "../_css/input.css";
import {
	HOVER,
	a11yDisabled,
	unstyledInput,
	variantColorOverlay,
	vars,
} from "../index.css";
import { withPrefersMotion } from "../__DONE__css-utils";
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

export const comboBoxInputCSS = style([
	unstyledInput,
	inputBg,
	sprinkles({
		height: "space_8",

		paddingX: "space_3",
		width: "100%",

		fontStyle: "bodyMd",
	}),

	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		borderTopLeftRadius: vars.borderRadius.md,
		borderBottomLeftRadius: vars.borderRadius.md,
	},
]);

export const comboBoxButtonCSS = style([
	sprinkles({
		width: "space_8",
		height: "space_8",

		aspectRatio: "square",

		flexShrink: "0",
		flexGrow: "0",

		color: "text_low_contrast",

		background: "btn_secondary_bg",

		borderLeft: "border_rule",
	}),
	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		borderTopRightRadius: vars.borderRadius.md,
		borderBottomRightRadius: vars.borderRadius.md,
		selectors: {
			[`&${HOVER}`]: {
				background: vars.color.btn_secondary_bg_highlighted,
				color: vars.color.text_high_contrast,
			},
		},
	},
]);
