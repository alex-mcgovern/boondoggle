import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	ACTIVE,
	FOCUS,
	HOVER,
	a11yDisabled,
	unstyledInput,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";
import { buttonShadow } from "../../_css/button.css";

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

		background: "input_background",

		fontStyle: "input",
		boxShadow: "inset_input",
	}),

	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		borderTopLeftRadius: vars.borderRadius.md,
		borderBottomLeftRadius: vars.borderRadius.md,
		selectors: {
			[`&${HOVER}`]: {
				background: vars.color.input_background_active,
			},
			[`&${FOCUS}`]: {
				background: vars.color.input_background_focus,
			},
		},
	},
]);

export const comboBoxButtonCSS = style([
	buttonShadow({ style: "inner-only" }),
	sprinkles({
		width: "space_8",
		height: "space_8",

		aspectRatio: "square",

		flexShrink: "0",
		flexGrow: "0",

		color: "text_low_contrast",

		background: "button_secondary_background",

		borderLeft: "border_rule",

		fontStyle: "input",
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
				background: vars.color.button_secondary_background_active,
				color: vars.color.text_high_contrast,
			},
			[`&${ACTIVE}`]: {
				background: vars.color.button_secondary_background_active,
				color: vars.color.text_high_contrast,
				boxShadow: `${vars.boxShadow.button_inset_top_highlight}, ${vars.boxShadow.button_inset_bottom_shadow}`,
			},
		},
	},
]);
