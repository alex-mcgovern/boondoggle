import { keyframes, style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";
import { withPrefersMotion } from "../css-utils";
import { a11yFocus, vars } from "../index.css";

export const toastRegionCSS = style([
	sprinkles({
		display: "flex",
		flexDirection: "column",
		gap: "space_2",
	}),
	{
		position: "fixed",
		bottom: vars.spacing.space_2,
		right: vars.spacing.space_2,
		outline: "none",
	},
]);

const kfToastIn = keyframes({
	"0%": {
		opacity: 0,
		maxHeight: 0,
		transform: `translateY(${vars.spacing.space_4})`,
	},
	"100%": { opacity: 1, maxHeight: "100vh" },
});
const kfToastOut = keyframes({
	"0%": { opacity: 1, maxHeight: "100vh" },
	"100%": { opacity: 0, transform: "scale(0.99)", maxHeight: 0 },
});

export const toastCSS = style([
	a11yFocus,
	sprinkles({
		display: "flex",
		gap: "space_4",
		alignItems: "center",

		paddingLeft: "space_4",
		paddingRight: "space_2",
		paddingY: "space_2",

		border: "border_default",
		borderRadius: "md",

		background: "tint_default",
		color: "text_low_contrast",
		boxShadow: "md",
	}),
	{
		selectors: {
			"&[data-animation=entering]": {
				...withPrefersMotion({
					animation: `${kfToastIn} ${vars.transitionDuration.long} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-animation=exiting]": {
				...withPrefersMotion({
					animation: `${kfToastOut} ${vars.transitionDuration.long} ${vars.ease.quart_in_out} forwards`,
				}),
			},
		},
	},
]);

export const toastTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		color: "text_low_contrast",
		fontStyle: "bodyMd",
	}),
]);

export const toastDescriptionCSS = style([
	sprinkles({
		color: "text_low_contrast",
		fontStyle: "bodyMd",
	}),
]);
