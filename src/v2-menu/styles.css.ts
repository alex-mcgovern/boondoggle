import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	NOT_DISABLED,
	a11yDisabled,
	a11yFocus,
	animateFadeIn,
	elementPaddingRaw,
	floatingMenuVars,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const menuCSS = style([
	animateFadeIn,
	sprinkles({
		background: "background",
		border: "border_2",
		boxShadow: "md",
		overflowY: "auto",
	}),
	{
		padding: floatingMenuVars.menuPadding,
		borderRadius: floatingMenuVars.menuRadius,
		selectors: {
			"&:focus": {
				outline: "none",
			},
		},
		maxHeight: "15rem",
		// minWidth: "10rem",
	},
]);

export const menuItemCSS = recipe({
	base: [
		sprinkles({
			paddingX: "space_1",
			paddingY: "space_0.5",

			width: "100%",
			display: "flex",
			alignItems: "center",
			gap: "space_1",

			fontStyle: "bodyMd",
			fontWeight: "normal",
			color: "text_low_contrast",
			textAlign: "left",

			textDecoration: "none",
		}),
		a11yDisabled,
		a11yFocus,
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			borderRadius: floatingMenuVars.itemRadius,
			selectors: {
				[`&${NOT_DISABLED}:is(:hover,[data-hovered])`]: {
					cursor: "default",
					background: vars.color.tint_3,
				},
				[`&${NOT_DISABLED}:is(:focus,[data-focused])`]: {
					outline: 0,
					cursor: "default",
					background: vars.color.tint_3,
				},
				[`&${NOT_DISABLED}:is(:active,[data-selected])`]: {
					background: vars.color.tint_4,
				},
			},
		},
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		colorOverlay: variantColorOverlay,
		size: {
			lg: [
				{ minHeight: floatingMenuVars.itemHeightLg },
				{
					padding: `${elementPaddingRaw.lg.y} ${floatingMenuVars.itemPaddingXLg}`,
				},
			],
			md: [
				{ minHeight: floatingMenuVars.itemHeightMd },
				{
					padding: `${elementPaddingRaw.md.y} ${floatingMenuVars.itemPaddingXMd}`,
				},
			],
			sm: [
				{ minHeight: floatingMenuVars.itemHeightSm },
				{
					padding: `${elementPaddingRaw.sm.y} ${floatingMenuVars.itemPaddingXSm}`,
				},
			],
		},
	},
});

export const menuHeaderCSS = recipe({
	base: [
		sprinkles({
			color: "text_low_contrast",
			fontStyle: "bodySm",
			marginY: "space_2",
		}),
	],
	variants: {
		size: {
			lg: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.lg.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.lg.x,
					vars.spacing.space_1,
				),
			},
			md: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.md.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.md.x,
					vars.spacing.space_1,
				),
			},
			sm: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.sm.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.sm.x,
					vars.spacing.space_1,
				),
			},
		},
	},
});
