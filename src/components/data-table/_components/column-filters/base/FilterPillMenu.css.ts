import { keyframes, style } from "@vanilla-extract/css";
import {
	createAccessibleTransition,
	utilCss,
	vars,
} from "../../../../../index.css";

const rotateInKeyframes = keyframes({
	"0%": {},
	"100%": { transform: "rotate(45deg)" },
});
const rotateOutKeyframes = keyframes({
	"0%": { transform: "rotate(45deg)" },
	"100%": { transform: "rotate(0deg)" },
});

export const filterMenu = style([
	utilCss({ width: "auto" }),
	{
		width: "22.5rem",
	},
]);

export const closeIcon = style({
	...createAccessibleTransition({
		animation: `${rotateInKeyframes} ${vars.transitionDuration.long} ease forwards`,
	}),
});

export const openIcon = style({
	...createAccessibleTransition({
		animation: `${rotateOutKeyframes} ${vars.transitionDuration.long} ease forwards`,
	}),
});

export const isFilteredPillLeftStyle = style({
	background: `${vars.color.tint_default} !important`,
	paddingRight: `${vars.spacing.space_1} !important`,
});

export const isFilteredPillRightStyle = style({
	paddingLeft: `${vars.spacing.space_0} !important`,
});
