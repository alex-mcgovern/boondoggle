import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";

import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const inputCSS = style([
	sprinkles({
		background: "text_field_background",
		border: "border_element",

		borderRadius: "md",
		color: "text_high_contrast",

		fontStyle: "bodySm",

		height: "element_sm",

		paddingX: "space_2",
		width: "100%",
	}),
	withPrefersMotion({
		transitionDuration: vars.transitionDuration.short,
		transitionProperty: "color, background, border-color, outline, opacity",
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		outline: "0px solid transparent",

		selectors: {
			/**
			 * Whether the input is currently hovered with a mouse.
			 */

			"&[data-disabled]": {
				cursor: "not-allowed !important",
				opacity: 0.5,
			},

			/**
			 * Whether the input is focused, either via a mouse or keyboard.
			 */

			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the input is keyboard focused.
			 */

			"&[data-focused]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the input is disabled.
			 */

			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},

			/**
			 * Whether the input is invalid.
			 */

			"&[data-invalid]": {
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
				vars: assignVars(
					vars.color,
					makeTheme({
						alpha: redA,
						isOverlay: true,
						primary: red,
						secondary: red,
					}),
				),
			},
		},
	},
]);
