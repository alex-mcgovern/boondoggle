import { vars } from "../index.css";
import { makeTheme, withPrefersMotion } from "../__DONE__css-utils";
import { sprinkles } from "../__DONE__sprinkles/index.css";
import { assignVars, style } from "@vanilla-extract/css";
import { red, redA } from "@radix-ui/colors";

export const inputCSS = style([
	sprinkles({
		height: "element_sm",
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
		outline: "0px solid transparent",

		selectors: {
			/**
			 * Whether the input is currently hovered with a mouse.
			 */
			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},
			/**
			 * Whether the input is focused, either via a mouse or keyboard.
			 */
			"&[data-focused]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
			/**
			 * Whether the input is keyboard focused.
			 */
			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},
			/**
			 * Whether the input is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the input is invalid.
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
