import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { a11yFocus } from "../../../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../../../styles/common/selectors.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { utilCss } from "../../../../styles/utils/util_css.css";

export const closeButton = style([
	a11yFocus,
	utilCss({
		color: "text_low_contrast",
		fontStyle: "bodyMd",

		paddingX: "space_2",
		paddingY: "space_1",

		flexShrink: "0",
	}),
	{
		marginRight: calc.multiply(vars.spacing.space_2, -1),
		selectors: {
			[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
				color: vars.color.text_high_contrast,
			},
		},
		...createAccessibleTransition({
			transition: `color ${vars.transitionDuration.medium} ease`,
		}),
	},
]);

const rotateInKeyframes = keyframes({
	"0%": {},
	"100%": { transform: "rotate(45deg)" },
});

export const closeIcon = style({
	...createAccessibleTransition({
		animation: `${rotateInKeyframes} ${vars.transitionDuration.long} ease forwards`,
	}),
});
