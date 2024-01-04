import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocus,
	elementPaddingRaw,
	floatingMenu,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../__DONE__css-utils";
import { sprinkles } from "../../__DONE__sprinkles/index.css";

export const getSelectItemStyles = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",
			gap: "space_2",

			fontStyle: "bodyMd",
			fontWeight: "normal",
			color: "text_low_contrast",
			textAlign: "left",
			textDecoration: "none",

			margin: "none",
			width: "100%",
		}),
		a11yDisabled,
		a11yFocus,
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			borderRadius: floatingMenu.item.radius,

			minHeight: floatingMenu.item.height,
			padding: `${elementPaddingRaw.sm.y} ${floatingMenu.item.paddingX}`,

			selectors: {
				"&:hover": {
					cursor: "pointer",
				},
				"&:active": {
					background: vars.color.tint_hover,
				},
			},
		},
	],
	variants: {
		colorOverlay: variantColorOverlay,
	},
});

export const isHighlightedStyle = style([
	{
		background: vars.color.tint_hover,
	},
]);
