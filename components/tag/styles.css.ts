import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../src/styles/common/a11y.css";
import { HOVER_FOCUS } from "../../src/styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../src/styles/theme.css";
import { createAccessibleTransition } from "../../src/styles/utils/create_accessible_transition";
import { utilCss } from "../../src/styles/utils/util_css.css";

const tagSize = styleVariants({
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

export const getTagStyle = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "tint_default",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "inline-flex",
			flexShrink: "0",
			gap: "space_1",
			paddingX: "space_2",
			paddingY: "space_1",
			textDecoration: "none",
			whiteSpace: "nowrap",
			width: "max-content",
		}),
		a11yFocus,
		createAccessibleTransition({
			transition: `ease ${vars.transitionDuration.short} ease`,
			transitionProperty: "color, background-color, border-color",
		}),
		{
			selectors: {
				[HOVER_FOCUS]: {
					background: vars.color.tint_active,
					color: vars.color.text_high_contrast,
				},
			},
		},
	],

	variants: {
		colorOverlay: variantColorOverlay,
		size: tagSize,
	},
});
