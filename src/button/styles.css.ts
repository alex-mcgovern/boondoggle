import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	ACTIVE,
	HOVER,
	a11yDisabled,
	a11yFocus,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const buttonCSS = recipe({
	base: [
		a11yFocus,
		a11yDisabled,
		sprinkles({
			display: "inline-flex",
			alignItems: "center",
			gap: "space_2",
			flexShrink: "0",

			fontStyle: "bodyMd",
			textDecoration: "none",

			borderRadius: "md",
		}),
		{
			outline: "0px solid transparent",
		},
		withPrefersMotion({
			transitionProperty:
				"color, background, border-color, outline, opacity",
			transitionDuration: vars.transitionDuration.short,
			transitionTimingFunction: vars.ease.quart_in_out,
		}),
	],

	variants: {
		colorOverlay: variantColorOverlay,
		alignment: {
			center: [
				sprinkles({ justifyContent: "center", textAlign: "center" }),
			],
			left: [sprinkles({ justifyContent: "start", textAlign: "left" })],
		},
		appearance: {
			primary: [
				sprinkles({
					fontWeight: "medium",
					whiteSpace: "nowrap",
				}),
				{
					background: vars.color.button_default,
					color: vars.color.white,
					selectors: {
						[`&${HOVER}`]: {
							background: vars.color.button_hover,
							color: vars.color.white,
						},
						[`&${ACTIVE}`]: {
							background: vars.color.button_active,
						},
					},
				},
			],

			secondary: [
				sprinkles({
					fontWeight: "medium",
					whiteSpace: "nowrap",
				}),
				{
					border: "1px solid",
					borderColor: vars.color.border_element,
					color: vars.color.text_high_contrast,
					selectors: {
						[`&${HOVER}`]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_element_active,
						},
						/**
						 * Whether the button is focused, either via a mouse or keyboard.
						 */

						"&[data-focused]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.focus_border,
							outline: `2px solid ${vars.color.focus_ring}`,
						},

						/**
						 * Whether the button is keyboard focused.
						 */

						"&[data-focus-visible]": {
							background:
								vars.color.text_field_background_highlighted,
							borderColor: vars.color.focus_border,
							outline: `2px solid ${vars.color.focus_ring}`,
						},
						[`&${ACTIVE}`]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_element_active,
						},
					},
				},
			],

			ghost: [
				sprinkles({
					fontWeight: "medium",
					whiteSpace: "nowrap",
				}),
				{
					color: vars.color.text_high_contrast,
					selectors: {
						[`&${HOVER}`]: {
							background: vars.color.tint_hover,
						},
						[`&${ACTIVE}`]: {
							background: vars.color.tint_hover,
						},
					},
				},
			],
		},
		size: {
			lg: [
				sprinkles({
					height: "space_12",
					paddingX: "space_6",
					paddingY: "space_3",
				}),
			],
			md: [
				sprinkles({
					height: "space_10",
					paddingX: "space_4",
					paddingY: "space_3",
				}),
			],
			sm: [
				sprinkles({
					height: "space_8",
					paddingX: "space_3",
					paddingY: "space_1",
				}),
			],
			xs: [
				sprinkles({
					height: "space_6",
					paddingX: "space_3",
					paddingY: "space_0",
				}),
			],
			square_lg: [
				sprinkles({
					aspectRatio: "square",
					height: "space_12",
					width: "space_12",
					flexGrow: "0",
				}),
			],
			square_md: [
				sprinkles({
					aspectRatio: "square",
					height: "space_10",
					width: "space_10",
					flexGrow: "0",
				}),
			],
			square_sm: [
				sprinkles({
					aspectRatio: "square",
					height: "space_8",
					width: "space_8",
					flexGrow: "0",
				}),
			],
			square_xs: [
				sprinkles({
					aspectRatio: "square",
					height: "space_6",
					width: "space_6",
					flexGrow: "0",
				}),
			],
		},
	},

	defaultVariants: {
		alignment: "center",
		appearance: "primary",
		size: "sm",
	},
});
