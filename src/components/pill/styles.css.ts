import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { utilCss } from "../../styles/utils/util_css.css";

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
			background: "tint_active",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "medium",
			textDecoration: "none",
			whiteSpace: "nowrap",
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
