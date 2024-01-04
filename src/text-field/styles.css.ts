import { assignVars, style } from "@vanilla-extract/css";
import { sprinkles } from "../v1/sprinkles/index.css";
import { vars } from "../index.css";
import { makeTheme } from "../v1/css-utils";
import { red, redA } from "@radix-ui/colors";

export const textFieldCSS = style([
	{
		selectors: {
			/**
			 * Whether the text field is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the value is invalid.
			 */
			"&[data-invalid]": {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: red,
						secondary: red,
						alpha: redA,
						isOverlay: true,
					}),
				),
			},
		},
	},
]);

export const textFieldButtonCSS = style([
	sprinkles({
		color: "text_low_contrast",

		width: "space_6",
		height: "space_6",

		flexShrink: "0",

		borderRadius: "sm",
	}),
	{
		selectors: {
			/**
			 * Ensure even spacing when the button is at the end of the group.
			 */
			"&:last-of-type": {
				marginRight: vars.spacing.space_1,
			},

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
