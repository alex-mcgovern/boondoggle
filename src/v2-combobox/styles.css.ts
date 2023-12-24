import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	HOVER,
	a11yDisabled,
	unstyledInput,
	variantColorOverlay,
	vars,
} from "../index.css";
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
	sprinkles({
		height: "space_8",

		paddingX: "space_3",
		width: "100%",

		fontStyle: "bodyMd",
		boxShadow: "inset_input",
	}),
	{},
]);

export const comboBoxButtonCSS = style([
	sprinkles({
		width: "space_8",
		height: "space_8",

		aspectRatio: "square",

		flexShrink: "0",
		flexGrow: "0",

		color: "text_low_contrast",

		background: "tint_default",

		borderLeft: "border_rule",
	}),
	withPrefersMotion({
		transitionProperty: "color",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		boxShadow: `${vars.boxShadow.sm}, ${vars.boxShadow.inset_button}, ${vars.boxShadow.button_highlight}`,

		selectors: {
			[`&${HOVER}`]: {
				color: vars.color.text_high_contrast,
			},
		},
	},
]);
