import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
	SELECTOR_LINK_BUTTON_INPUT_HOVER,
	type UtilCssArgs,
	a11yDisabled,
	a11yFocus,
	elementHeight,
	elementPadding,
	utilCss,
	vars,
} from "../index.css";

export const variantButtonSize = styleVariants({
	lg: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	md: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	sm: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	square_md: [
		utilCss({
			aspectRatio: "square",
			flexShrink: "0",
			fontStyle: "bodyMd",
			height: "space_10",
			width: "space_10",
		}),
	],
	square_sm: [
		utilCss({
			aspectRatio: "square",
			flexShrink: "0",
			fontStyle: "bodySm",
			height: "space_8",
			width: "space_8",
		}),
	],
	square_xs: [
		utilCss({
			aspectRatio: "square",
			flexShrink: "0",
			fontStyle: "bodySm",
			height: "space_6",
			width: "space_6",
		}),
	],
});

const COMMON_BUTTON_SPRINKLES: UtilCssArgs = {
	fontWeight: "medium",
	whiteSpace: "nowrap",
};

const variantAlignment = styleVariants({
	center: [utilCss({ justifyContent: "center", textAlign: "center" })],
	left: [utilCss({ justifyContent: "start", textAlign: "left" })],
});

export type Alignment = keyof typeof variantAlignment;

const variantAppearance = styleVariants({
	ghost: [
		utilCss(COMMON_BUTTON_SPRINKLES),
		{
			color: vars.color.text_high_contrast,
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
					background: vars.color.tint_default,
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

	navigational: [
		utilCss({
			fontWeight: "normal",
			paddingX: "space_2",
			paddingY: "space_1",
		}),
		{
			color: vars.color.text_high_contrast,
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
					background: vars.color.tint_default,
				},
				[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
					background: vars.color.tint_hover,
				},
			},
		},
	],

	primary: [
		utilCss(COMMON_BUTTON_SPRINKLES),
		{
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
		utilCss(COMMON_BUTTON_SPRINKLES),
		{
			border: "1px solid",
			borderColor: vars.color.border_default,
			color: vars.color.text_high_contrast,
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
					background: vars.color.tint_hover,
					borderColor: vars.color.border_hover,
				},
				[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
					background: vars.color.button_tint,
					borderColor: vars.color.button_default,
					color: vars.color.button_default,
				},
			},
		},
	],
});

export type Appearance = keyof typeof variantAppearance;

export const buttonBaseClsDoNotRemoveOrYouWillBeFired = style({});

export const getButtonStyles = recipe({
	base: [
		buttonBaseClsDoNotRemoveOrYouWillBeFired,
		a11yFocus,
		a11yDisabled,
		utilCss({
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
		size: "md",
	},

	variants: {
		alignment: variantAlignment,
		appearance: variantAppearance,
		size: variantButtonSize,
	},
});
