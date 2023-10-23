import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../src/styles/common/a11y.css";
import { HOVER_FOCUS } from "../../src/styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../src/styles/theme.css";
import { createAccessibleTransition } from "../../src/styles/utils/create_accessible_transition";
import { utilCss } from "../../src/styles/utils/util_css.css";

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
				[HOVER_FOCUS]: {
					background: vars.color.tint_active,
					borderColor: vars.color.border_default,
				},
			},
		},
	],

	variants: {
		color: variantColorOverlay,
		size: pillSize,
	},
});
