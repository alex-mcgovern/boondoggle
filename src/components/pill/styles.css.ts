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
			fontStyle: "bodyMd",
		}),
	],
	md: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
	sm: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
});

export const getPillStyle = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "tint_hover",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "normal",
			paddingX: "space_2",
			paddingY: "space_1",
			textDecoration: "none",
			whiteSpace: "nowrap",
			width: "max-content",
		}),
		a11yFocus,
		createAccessibleTransition({
			transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
		}),
		{
			selectors: {
				[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
					background: vars.color.tint_active,
					borderColor: vars.color.border_default,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
		size: pillSize,
	},
});
