import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
	a11yFocus,
	utilCss,
	variantColorOverlay,
	vars,
} from "../index.css";

export const pillCSS = recipe({
	base: [
		utilCss({
			display: "inline-flex",
			fontSize: "bodySm",
			alignItems: "center",
			justifyContent: "center",
			background: "tint_active",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "medium",
			textDecoration: "none",
			whiteSpace: "nowrap",
			paddingX: "space_2",
			paddingY: "space_1",
		}),
		{
			verticalAlign: "middle",
		},
		a11yFocus,
		withPrefersMotion({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		{
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
					background: vars.color.tint_active,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
		size: {
			lg: [
				utilCss({
					height: "space_10",
					minWidth: "space_10",
				}),
			],
			md: [
				utilCss({
					height: "space_8",
					minWidth: "space_8",
				}),
			],
			sm: [
				utilCss({
					height: "space_6",
					minWidth: "space_6",
				}),
			],
		},
	},
});
