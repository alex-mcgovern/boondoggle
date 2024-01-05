import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import { a11yFocus, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MENU BUTTON STYLES
 * ------------------------------------------------------------------------------- */

export const menuButtonCSS = recipe({
	base: [
		a11yFocus,
		sprinkles({
			flexShrink: "0",
			background: "background",
			flexGrow: "1",
			border: "border_element",

			fontStyle: "bodyMd",
			display: "flex",
			gap: "space_1",
			alignItems: "center",
			justifyContent: "center",
			color: "text_high_contrast",
			borderRadius: "md",
		}),
		{
			selectors: {
				"&:hover": {
					cursor: "pointer",
				},
			},
			width: "fit-content",
		},
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		size: {
			lg: [
				sprinkles({
					height: "space_12",
					minWidth: "space_12",
					paddingX: "space_4",
				}),
			],
			md: [
				sprinkles({
					height: "space_10",
					minWidth: "space_10",
					paddingX: "space_3",
				}),
			],
			sm: [
				sprinkles({
					height: "space_8",
					minWidth: "space_8",
					paddingX: "space_2",
				}),
			],
		},
	},
});

/** -----------------------------------------------------------------------------
 * POPOVER
 * ------------------------------------------------------------------------------- */

const kfPopoverIn = keyframes({
	"0%": { opacity: 0, transform: "scale(0.95)" },
	"100%": { opacity: 1 },
});
const kfPopoverOut = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0, transform: "scale(0.95)" },
});

export const popoverCSS = style([
	{
		selectors: {
			"&[data-entering]": {
				...withPrefersMotion({
					animation: `${kfPopoverIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-exiting]": {
				...withPrefersMotion({
					animation: `${kfPopoverOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-placement='top']": {
				transformOrigin: "bottom center",
			},
			"&[data-placement='bottom']": {
				transformOrigin: "top center",
			},
			"&[data-placement='left']": {
				transformOrigin: "right center",
			},
			"&[data-placement='right']": {
				transformOrigin: "left center",
			},
		},
	},
]);
