import { style } from "@vanilla-extract/css";
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

export const buttonBaseClsDoNotRemoveOrYouWillBeFired = style({});

export const buttonCSS = recipe({
	base: [
		buttonBaseClsDoNotRemoveOrYouWillBeFired,
		a11yFocus,
		a11yDisabled,
		sprinkles({
			display: "inline-flex",
			alignItems: "center",
			gap: "space_2",

			fontStyle: "bodyMd",
			textDecoration: "none",

			borderRadius: "md",
		}),
		withPrefersMotion({
			transition: `color ${vars.transitionDuration.short} ease,\
                         background ${vars.transitionDuration.short} ease,\
                         opacity ${vars.transitionDuration.short} ease,\
                         border-color ${vars.transitionDuration.short} ease`,
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
					borderColor: vars.color.border_default,
					color: vars.color.text_high_contrast,
					selectors: {
						[`&${HOVER}`]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_hover,
						},
						[`&${ACTIVE}`]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_active,
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
			square_md: [
				sprinkles({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodyMd",
					height: "space_10",
					width: "space_10",
				}),
			],
			square_sm: [
				sprinkles({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_8",
					width: "space_8",
				}),
			],
			square_xs: [
				sprinkles({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_6",
					width: "space_6",
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
