import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_HOVER,
	a11yFocus,
	createAccessibleTransition,
	utilCss,
	vars,
} from "../../../../../index.css";

export const closeButton = style([
	a11yFocus,
	utilCss({
		color: "text_low_contrast",
		fontStyle: "bodyMd",

		paddingX: "space_2",
		paddingY: "space_1",

		borderRadius: "pill",
		aspectRatio: "square",

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
