import { keyframes, style } from "@vanilla-extract/css";
import {
	a11yFocus,
	createAccessibleTransition,
	utilCss,
	vars,
} from "../../../../..";

const rotateOutKeyframes = keyframes({
	"0%": { transform: "rotate(45deg)" },
	"100%": { transform: "rotate(0deg)" },
});

export const openButton = style([
	a11yFocus,
	utilCss({
		borderRadius: "pill",
		display: "inline-flex",
		alignItems: "center",
		gap: "space_2",
		justifyContent: "center",

		color: "text_low_contrast",
		fontStyle: "bodyMd",

		paddingX: "space_2",
		paddingY: "space_1",
	}),
]);

export const openIcon = style({
	...createAccessibleTransition({
		animation: `${rotateOutKeyframes} ${vars.transitionDuration.long} ease forwards`,
	}),
});
