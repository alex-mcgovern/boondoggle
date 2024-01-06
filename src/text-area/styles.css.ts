import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const textareaCSS = style([
	sprinkles({
		background: "text_field_background",

		border: "border_element",
		borderRadius: "md",

		color: "text_high_contrast",

		fontStyle: "bodySm",

		paddingX: "space_2",
		width: "100%",
	}),
	withPrefersMotion({
		transitionDuration: vars.transitionDuration.short,
		transitionProperty: "color, background, border-color, outline, opacity",
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		minHeight: calc.multiply(vars.height.element_sm, 4),
		outline: "0px solid transparent",

		resize: "none",

		selectors: {
			/**
			 * Whether the text-area is disabled.
			 */
			"&[data-disabled]": {
				cursor: "not-allowed !important",
				opacity: 0.5,
			},
			/**
			 * Whether the text-area is keyboard focused.
			 */
			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
			/**
			 * Whether the text-area is focused, either via a mouse or keyboard.
			 */
			"&[data-focused]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
			/**
			 * Whether the text-area is currently hovered with a mouse.
			 */
			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},

			/**
			 * Whether the text-area is invalid.
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
