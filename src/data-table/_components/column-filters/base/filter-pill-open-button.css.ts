import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../../css-utils";
import { a11yFocus, vars } from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

const rotateOutKeyframes = keyframes({
	"0%": { transform: "rotate(45deg)" },
	"100%": { transform: "rotate(0deg)" },
});

export const openButtonCSS = style([
	a11yFocus,
	sprinkles({
		borderRadius: "pill",
		display: "inline-flex",
		flexShrink: "0",
		alignItems: "center",
		gap: "space_2",
		justifyContent: "center",

		color: "text_low_contrast",
		fontStyle: "bodyMd",

		height: "space_8",

		paddingX: "space_2",
		// paddingY: "space_0",
	}),
]);

export const openIconCSS = recipe({
	base: [sprinkles({ fontStyle: "bodyLg" })],
	variants: {
		shouldAnimate: {
			true: withPrefersMotion({
				animation: `${rotateOutKeyframes} ${vars.transitionDuration.long} ease forwards`,
			}),
			false: {},
		},
	},
});
