import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { buttonShadow } from "../../_css/button.css";
import {
	ACTIVE,
	HOVER,
	a11yDisabled,
	a11yFocus,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

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
			flexShrink: "0",

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
				buttonShadow({ style: "all" }),
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
							background: vars.color.button_hover,
						},
					},
				},
			],

			secondary: [
				buttonShadow({ style: "all" }),
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
		},
	},

	defaultVariants: {
		alignment: "center",
		appearance: "primary",
		size: "sm",
	},
});
