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

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

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

/** -----------------------------------------------------------------------------
 * MENU ITEM CSS
 * ------------------------------------------------------------------------------- */

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
			minHeight: floatingMenu.item.height,
			padding: `${elementPaddingRaw.sm.y} ${floatingMenu.item.paddingX}`,

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
	variants: {
		colorOverlay: variantColorOverlay,
	},
});

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = style([
	sprinkles({
		color: "text_low_contrast",
		fontStyle: "bodyMd",
		fontWeight: "normal",
		textAlign: "left",
	}),
	{
		height: floatingMenu.header.height,
		paddingLeft: floatingMenu.header.paddingX,
		paddingRight: floatingMenu.header.paddingX,
	},
]);

/** -----------------------------------------------------------------------------
 * MENU SEPARATOR
 * ------------------------------------------------------------------------------- */

export const menuSeparatorCSS = style([
	sprinkles({
		marginY: "space_1",
		background: "border_rule",
	}),
	{
		height: "1px",
		marginLeft: floatingMenu.item.paddingX,
		marginRight: floatingMenu.item.paddingX,
	},
]);
