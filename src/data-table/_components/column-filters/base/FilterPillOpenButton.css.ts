import { keyframes, style } from "@vanilla-extract/css";
import { withPrefersMotion } from "../../../../css-utils";
import { a11yFocus, vars } from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

const rotateOutKeyframes = keyframes({
	"0%": { transform: "rotate(45deg)" },
	"100%": { transform: "rotate(0deg)" },
});

export const openIconCSS = style([
	a11yFocus,
	sprinkles({
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

export const openButtonCSS = style({
	...withPrefersMotion({
		animation: `${rotateOutKeyframes} ${vars.transitionDuration.long} ease forwards`,
	}),
});
