import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocus,
	elementPaddingRaw,
	floatingMenu,
	variantColorOverlay,
	vars,
} from "../index.css";
import { withPrefersMotion } from "../css-utils";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

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
		maxHeight: "20rem",
	},
]);

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

export const menuSectionCSS = style([
	{
		selectors: {
			"&:not(:last-child)::after": {
				content: "",
				display: "block",

				marginTop: elementPaddingRaw.sm.y,
				marginBottom: elementPaddingRaw.sm.y,

				background: vars.color.border_rule,
				height: "1px",

				marginLeft: floatingMenu.item.paddingX,
				marginRight: floatingMenu.item.paddingX,
			},
		},
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

			fontStyle: "bodySm",
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
				"&[data-hovered]": {
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				"&[data-focused]": {
					outline: 0,
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				"&[data-selected]": {
					fontWeight: "medium",
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
		fontStyle: "bodySm",
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
		fontStyle: "bodySm",
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
	sprinkles({}),
	{
		marginTop: vars.spacing.space_1,
		marginBottom: vars.spacing.space_1,

		background: vars.color.border_rule,
		height: "1px",

		marginLeft: floatingMenu.item.paddingX,
		marginRight: floatingMenu.item.paddingX,
	},
]);
