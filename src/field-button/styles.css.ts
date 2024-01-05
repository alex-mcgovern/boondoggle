import { style } from "@vanilla-extract/css";
import { withPrefersMotion } from "../css-utils";
import { sprinkles } from "../sprinkles/index.css";
import { vars } from "../index.css";

export const fieldButtonCSS = style([
	sprinkles({
		color: "text_low_contrast",

		width: "space_6",
		height: "space_6",

		flexShrink: "0",

		borderRadius: "sm",
	}),
	withPrefersMotion({
		transitionProperty: "background, color",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		selectors: {
			/**
			 * Whether the button is currently hovered with a mouse.
			 */
			"&[data-hovered]": {
				color: vars.color.text_high_contrast,
				background: vars.color.btn_secondary_bg_highlighted,
			},
			/**
			 * Whether the button is currently in a pressed state.
			 */
			"&[data-pressed]": {
				color: vars.color.text_high_contrast,
				background: vars.color.btn_secondary_bg_highlighted,
			},
			/**
			 * Whether the button is focused, either via a mouse or keyboard.
			 */
			"&[data-focused]": {
				color: vars.color.text_high_contrast,
				background: vars.color.btn_secondary_bg_highlighted,
				outline: 0,
			},
			/**
			 * Whether the button is keyboard focused.
			 */
			"&[data-focus-visible]": {
				color: vars.color.text_high_contrast,
				background: vars.color.btn_secondary_bg_highlighted,
				outline: 0,
			},
			/**
			 * Whether the button is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
			},
		},
	},
]);
