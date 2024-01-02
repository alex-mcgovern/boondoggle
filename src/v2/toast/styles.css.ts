import { keyframes, style } from "@vanilla-extract/css";
import { HOVER, a11yFocus, vars } from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const toastRegionCSS = style([
	sprinkles({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "space_2",
	}),
	{
		zIndex: 10,
		position: "fixed",
		bottom: vars.spacing.space_4,
		right: vars.spacing.space_4,
		left: vars.spacing.space_4,
		outline: "none",
	},
]);

const kfToastIn = keyframes({
	"0%": {
		zIndex: 1,
		opacity: 0,
		transform: `translateY(${vars.spacing.space_4})`,
	},
	"100%": { opacity: 1 },
});
const kfToastOut = keyframes({
	"0%": { opacity: 1, position: "absolute", bottom: "100%" },
	"100%": {
		opacity: 0,
		transform: `translateY(${vars.spacing.space_4})`,
	},
});
const kfToastNoAnim = keyframes({
	"0%": {},
	"100%": {},
});

export const toastCSS = style([
	a11yFocus,
	sprinkles({
		display: "flex",
		gap: "space_4",
		alignItems: "center",

		paddingY: "space_2",
		paddingLeft: "space_4",
		paddingRight: "space_2",

		borderRadius: "md",

		background: "toast_background",
		color: "white",
		boxShadow: "lg",
	}),
	{
		selectors: {
			"&:last-child[data-animation=entering]": {
				...withPrefersMotion({
					animation: `${kfToastIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards `,
				}),
			},
			"&:last-child[data-animation=exiting]": {
				...withPrefersMotion({
					animation: `${kfToastOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&:not(:last-child)[data-animation=exiting]": {
				...withPrefersMotion({
					animation: `${kfToastNoAnim} 0 ${vars.ease.quart_in_out} forwards`,
				}),
			},
		},
	},
]);

export const toastCloseButtonCSS = style([
	a11yFocus,
	sprinkles({
		width: "space_8",
		height: "space_8",
		borderRadius: "md",
		color: "toast_text",
		marginLeft: "auto",
	}),
	{
		...withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ${vars.ease.quart_in_out}, color ${vars.transitionDuration.short} ${vars.ease.quart_in_out}`,
		}),
		selectors: {
			[`&${HOVER}`]: {
				background: vars.color.text_low_contrast,
			},
		},
	},
]);

export const toastTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		color: "toast_text",
		fontStyle: "bodyMd",
	}),
]);

export const toastDescriptionCSS = style([
	sprinkles({
		color: "toast_text",
		fontStyle: "bodyMd",
	}),
]);
