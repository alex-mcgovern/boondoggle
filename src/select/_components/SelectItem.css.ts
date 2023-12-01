import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../css-utils";
import {
	a11yDisabled,
	a11yFocus,
	floatingMenuVars,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { sprinkles } from "../../sprinkles/index.css";

const selectItemSize = styleVariants({
	lg: [
		{ minHeight: floatingMenuVars.itemHeightLg },
		{
			padding: `${floatingMenuVars.itemPaddingXLg} ${floatingMenuVars.itemPaddingXLg}`,
		},
	],
	md: [
		{ minHeight: floatingMenuVars.itemHeightMd },
		{
			padding: `${floatingMenuVars.itemPaddingYMd} ${floatingMenuVars.itemPaddingXMd}`,
		},
	],
	sm: [
		{ minHeight: floatingMenuVars.itemHeightSm },
		{
			padding: `${floatingMenuVars.itemPaddingXSm} ${floatingMenuVars.itemPaddingXSm}`,
		},
	],
});

export const getSelectItemStyles = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "flex",
			fontStyle: "bodyMd",
			fontWeight: "normal",
			gap: "space_2",
			margin: "none",
			textAlign: "left",
			textDecoration: "none",
			width: "100%",
		}),
		a11yDisabled,
		a11yFocus,
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			borderRadius: floatingMenuVars.itemRadius,
			selectors: {
				"&:hover": {
					cursor: "default",
				},
				"&:active": {
					background: vars.color.floating_menu_highlight,
				},
			},
		},
	],
	variants: {
		colorOverlay: variantColorOverlay,
		size: selectItemSize,
	},
});

export const isHighlightedStyle = style([
	{
		background: vars.color.floating_menu_highlight,
	},
]);
