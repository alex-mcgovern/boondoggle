import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const textareaCSS = style([
	sprinkles({
		width: "100%",

		border: "border_element",
		borderRadius: "md",

		paddingX: "space_2",

		fontStyle: "bodySm",

		color: "text_high_contrast",
		background: "text_field_background",
	}),
	withPrefersMotion({
		transitionProperty: "color, background, border-color, outline, opacity",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		minHeight: calc.multiply(vars.height.element_sm, 4),
		resize: "none",

		outline: "0px solid transparent",

		selectors: {
			/**
			 * Whether the text-area is currently hovered with a mouse.
			 */
			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
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
			 * Whether the text-area is keyboard focused.
			 */
			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
			/**
			 * Whether the text-area is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the text-area is invalid.
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
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
		},
	},
]);
