/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	NOT_DISABLED,
	a11yDisabled,
	a11yFocus,
	elementPaddingRaw,
	floatingMenu,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const menuCSS = style([
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
			gap: "space_2",
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
				"&:not(:last-child)": {
					marginBottom: floatingMenu.container.padding,
				},
			},
		},
	],
	variants: {
		colorOverlay: variantColorOverlay,
	},
});

export const menuItemNameCSS = style([
	sprinkles({
		display: "block",
		color: "text_high_contrast",
		fontStyle: "bodyMd",
	}),
]);

export const menuItemDescriptionCSS = style([
	sprinkles({
		display: "block",
		color: "text_low_contrast",
		fontStyle: "bodySm",
	}),
]);

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = style([
	sprinkles({
		color: "text_low_contrast",
		fontStyle: "bodyMd",
		fontWeight: "normal",
		textAlign: "left",

		display: "flex",
		alignItems: "center",
	}),
	{
		height: calc.subtract(
			floatingMenu.item.height,
			floatingMenu.container.padding,
		),
		paddingLeft: floatingMenu.item.paddingX,
		paddingRight: floatingMenu.item.paddingX,
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
