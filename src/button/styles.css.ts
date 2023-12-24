import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
	SELECTOR_LINK_BUTTON_INPUT_HOVER,
	a11yDisabled,
	a11yFocus,
	elementHeight,
	elementPadding,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const buttonBaseClsDoNotRemoveOrYouWillBeFired = style({});

export const getButtonStyles = recipe({
	base: [
		buttonBaseClsDoNotRemoveOrYouWillBeFired,
		a11yFocus,
		a11yDisabled,
		sprinkles({
			alignItems: "center",
			borderRadius: "md",
			display: "inline-flex",
			gap: "space_2",
			textDecoration: "none",
		}),
		withPrefersMotion({
			transition: `color ${vars.transitionDuration.short} ease,\
                         background ${vars.transitionDuration.short} ease,\
                         opacity ${vars.transitionDuration.short} ease,\
                         border-color ${vars.transitionDuration.short} ease`,
		}),
	],

	variants: {
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
					boxShadow: `${vars.boxShadow.sm}, ${vars.boxShadow.inset_button}, ${vars.boxShadow.button_highlight}`,

					background: vars.color.button_default,
					color: vars.color.white,
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
							background: vars.color.button_hover,
							color: vars.color.white,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
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
					boxShadow: `${vars.boxShadow.sm}, ${vars.boxShadow.inset_button}, ${vars.boxShadow.button_highlight}`,

					border: "1px solid",
					borderColor: vars.color.border_element,
					color: vars.color.text_high_contrast,
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_element_active,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_element_active,
						},
					},
				},
			],

			navigational: [
				sprinkles({
					fontWeight: "normal",
					paddingX: "space_2",
					paddingY: "space_1",
				}),
				{
					color: vars.color.text_high_contrast,
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
							background: vars.color.tint_hover,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
							background: vars.color.tint_hover,
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
						[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
							background: vars.color.tint_hover,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
							background: vars.color.tint_hover,
						},
					},
				},
			],

			link: [
				{
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
							color: vars.color.button_default,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
							color: vars.color.button_active,
						},
					},
				},
			],
		},
		size: {
			lg: [
				sprinkles({
					fontStyle: "bodyMd",
				}),
			],
			md: [
				sprinkles({
					fontStyle: "bodyMd",
				}),
			],
			sm: [
				sprinkles({
					fontStyle: "bodyMd",
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

	compoundVariants: [
		{
			style: [elementPadding.lg, { height: elementHeight.lg }],
			variants: { appearance: "primary", size: "lg" },
		},
		{
			style: [elementPadding.md, { height: elementHeight.md }],
			variants: { appearance: "primary", size: "md" },
		},
		{
			style: [elementPadding.sm, { height: elementHeight.sm }],
			variants: { appearance: "primary", size: "sm" },
		},

		{
			style: [elementPadding.lg, { height: elementHeight.lg }],
			variants: { appearance: "secondary", size: "lg" },
		},
		{
			style: [elementPadding.md, { height: elementHeight.md }],
			variants: { appearance: "secondary", size: "md" },
		},
		{
			style: [elementPadding.sm, { height: elementHeight.sm }],
			variants: { appearance: "secondary", size: "sm" },
		},

		{
			style: [elementPadding.lg, { height: elementHeight.lg }],
			variants: { appearance: "ghost", size: "lg" },
		},
		{
			style: [elementPadding.md, { height: elementHeight.md }],
			variants: { appearance: "ghost", size: "md" },
		},
		{
			style: [elementPadding.sm, { height: elementHeight.sm }],
			variants: { appearance: "ghost", size: "sm" },
		},
	],

	defaultVariants: {
		alignment: "center",
		appearance: "primary",
		size: "sm",
	},
});
