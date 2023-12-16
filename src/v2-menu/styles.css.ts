import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	NOT_DISABLED,
	a11yDisabled,
	a11yFocus,
	animateFadeIn,
	elementPaddingRaw,
	floatingMenu,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const menuCSS = style([
	animateFadeIn,
	sprinkles({
		background: "background",
		border: "border_rule",
		boxShadow: "md",
		overflowY: "auto",
	}),
	{
		padding: floatingMenu.container.padding,
		borderRadius: floatingMenu.container.radius,
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
			width: "100%",
			display: "flex",
			alignItems: "center",
			gap: "space_1",
			flexShrink: "0",

			fontStyle: "bodyMd",
			fontWeight: "normal",
			color: "text_high_contrast",
			textAlign: "left",

			textDecoration: "none",
		}),
		a11yDisabled,
		a11yFocus,
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			borderRadius: floatingMenu.item.radius,
			selectors: {
				[`&${NOT_DISABLED}:is(:hover,[data-hovered])`]: {
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				[`&${NOT_DISABLED}:is(:focus,[data-focused])`]: {
					outline: 0,
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				[`&${NOT_DISABLED}:is(:active,[data-selected])`]: {
					background: vars.color.tint_hover,
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
				{
					minHeight: floatingMenu.item.height.lg,
					padding: `${elementPaddingRaw.lg.y} ${floatingMenu.item.paddingX.lg}`,
				},
			],
			md: [
				{
					minHeight: floatingMenu.item.height.md,
					padding: `${elementPaddingRaw.md.y} ${floatingMenu.item.paddingX.md}`,
				},
			],
			sm: [
				{
					minHeight: floatingMenu.item.height.sm,
					padding: `${elementPaddingRaw.sm.y} ${floatingMenu.item.paddingX.sm}`,
				},
			],
		},
	},
});

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",

			color: "text_low_contrast",
			fontStyle: "bodyMd",
			fontWeight: "normal",
			textAlign: "left",
		}),
	],
	variants: {
		size: {
			lg: {
				height: floatingMenu.item.height.lg,
				paddingLeft: floatingMenu.item.paddingX.lg,
				paddingRight: floatingMenu.item.paddingX.lg,
			},
			md: {
				height: floatingMenu.item.height.md,
				paddingLeft: floatingMenu.item.paddingX.md,
				paddingRight: floatingMenu.item.paddingX.md,
			},
			sm: {
				height: floatingMenu.item.height.sm,
				paddingLeft: floatingMenu.item.paddingX.sm,
				paddingRight: floatingMenu.item.paddingX.sm,
			},
		},
	},
});
