import { red, redA } from "@radix-ui/colors";
import { style, assignVars } from "@vanilla-extract/css";
import { withPrefersMotion, makeTheme } from "../css-utils";
import { sprinkles } from "../sprinkles/index.css";
import { vars } from "../index.css";
import { recipe } from "@vanilla-extract/recipes";

export const selectValueCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_2",
	}),
]);

export const selectCSS = style([
	sprinkles({ flexShrink: "0" }),
	{
		selectors: {
			/**
			 * Whether the select is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the select is invalid.
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

export const selectButtonCSS = recipe({
	base: [
		sprinkles({
			height: "element_sm",
			width: "100%",

			paddingX: "space_2",

			fontStyle: "bodySm",

			color: "text_high_contrast",

			display: "flex",
			alignItems: "center",
			gap: "space_2",
			flexShrink: "0",
		}),
		withPrefersMotion({
			transitionProperty:
				"color, background, border-color, outline, opacity",
			transitionDuration: vars.transitionDuration.short,
			transitionTimingFunction: vars.ease.quart_in_out,
		}),
		{
			outline: "0px solid transparent",

			selectors: {
				"&[data-placeholder]": {
					color: vars.color.text_low_contrast,
				},

				/**
				 * Whether the select button is disabled.
				 */

				"&[data-disabled]": {
					opacity: 0.5,
					cursor: "not-allowed !important",
				},
			},
		},
	],
	defaultVariants: {
		variant: "default",
	},
	variants: {
		variant: {
			default: [
				sprinkles({
					border: "border_element",
					borderRadius: "md",

					background: "text_field_background",
				}),
				withPrefersMotion({
					transitionProperty:
						"color, background, border-color, outline, opacity",
					transitionDuration: vars.transitionDuration.short,
					transitionTimingFunction: vars.ease.quart_in_out,
				}),
				{
					outline: "0px solid transparent",

					selectors: {
						/**
						 * Whether the select button is currently hovered with a mouse.
						 */

						"&[data-hovered]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.border_element_active,
						},

						/**
						 * Whether the select button is currently in a pressed state.
						 */

						"&[data-pressed]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.focus_border,
							outline: `2px solid ${vars.color.focus_ring}`,
						},

						/**
						 * Whether the select button is focused, either via a mouse or keyboard.
						 */

						"&[data-focused]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.focus_border,
							outline: `2px solid ${vars.color.focus_ring}`,
						},

						/**
						 * Whether the select button is keyboard focused.
						 */

						"&[data-focus-visible]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.focus_border,
							outline: `2px solid ${vars.color.focus_ring}`,
						},

						/**
						 * Whether the select button is disabled.
						 */

						"&[data-disabled]": {
							opacity: 0.5,
							cursor: "not-allowed !important",
						},
					},
				},
			],
			borderless: {
				selectors: {
					/**
					 * Whether the select button is focused, either via a mouse or keyboard.
					 */
					"&[data-focused]": {
						outline: 0,
					},

					/**
					 * Whether the select button is keyboard focused.
					 */
					"&[data-focus-visible]": {
						outline: 0,
					},
				},
			},
		},
	},
});
