import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const dateInputCSS = style([
	sprinkles({
		height: "element_sm",
		width: "100%",

		border: "border_element",
		borderRadius: "md",

		display: "flex",
		alignItems: "center",

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
			 * Whether the date input is currently hovered with a mouse.
			 */

			"&[data-hovered]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.border_element_active,
			},

			/**
			 * Whether an element within the date input is focused, either via a mouse or keyboard.
			 */

			"&[data-focus-within]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether an element within the date input is keyboard focused.
			 */

			"&[data-focus-visible]": {
				background: vars.color.text_field_background_highlighted,
				borderColor: vars.color.focus_border,
				outline: `2px solid ${vars.color.focus_ring}`,
			},

			/**
			 * Whether the date input is disabled.
			 */

			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the date input is invalid.
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

export const dateSegmentCSS = style([
	sprinkles({
		color: "text_high_contrast",
		paddingX: "space_0.5",
	}),
	{
		fontVariantNumeric: "tabular-nums",
		textAlign: "end",

		selectors: {
			"&[data-type=literal]": {
				padding: 0,
			},
			"&[data-placeholder]": {
				color: vars.color.text_low_contrast,
			},

			"&:focus": {
				color: vars.color.button_active,
				background: vars.color.button_tint,
				outline: "none",
				borderRadius: vars.borderRadius.sm,
				caretColor: "transparent",
			},
		},
	},
]);
