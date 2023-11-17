import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	variantColorOverlay,
	vars,
	a11yFocus,
	createAccessibleTransition,
	utilCss,
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
} from "../../index.css";

const pillSize = styleVariants({
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
});

export const getPillStyle = recipe({
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
		createAccessibleTransition({
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
		size: pillSize,
	},
});
