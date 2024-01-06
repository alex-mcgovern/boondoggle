import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";

import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const dateInputCSS = style([
	sprinkles({
		alignItems: "center",
		background: "text_field_background",

		border: "border_element",
		borderRadius: "md",

		color: "text_high_contrast",
		display: "flex",

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
			 * Whether the date input is currently hovered with a mouse.
			 */

			"&[data-disabled]": {
				cursor: "not-allowed !important",
				opacity: 0.5,
			},

			/**
			 * Whether an element within the date input is focused, either via a mouse or keyboard.
			 */

			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether an element within the date input is keyboard focused.
			 */

			"&[data-focus-within]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the date input is disabled.
			 */

			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},

			/**
			 * Whether the date input is invalid.
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

export const dateSegmentCSS = style([
	sprinkles({
		color: "text_high_contrast",
		paddingX: "space_0.5",
	}),
	{
		fontVariantNumeric: "tabular-nums",
		selectors: {
			"&:focus": {
				background: vars.color.button_tint,
				borderRadius: vars.borderRadius.sm,
				caretColor: "transparent",
				color: vars.color.button_active,
				outline: "none",
			},
			"&[data-placeholder]": {
				color: vars.color.text_low_contrast,
			},

			"&[data-type=literal]": {
				padding: 0,
			},
		},

		textAlign: "end",
	},
]);
