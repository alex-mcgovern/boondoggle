import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { HOVER, a11yFocusStyleRule, vars } from "../index.css";
import { withPrefersMotion } from "../css-utils";
import { sprinkles } from "../sprinkles/index.css";

const DOT_SIZE = vars.spacing.space_4;
const SWITCH_MARGIN = vars.spacing["space_0.5"];
const SWITCH_HEIGHT = calc.add(DOT_SIZE, calc.multiply(SWITCH_MARGIN, 2));
const SWITCH_WIDTH = calc.add(
	calc.multiply(DOT_SIZE, 2),
	calc.multiply(SWITCH_MARGIN, 2),
);

export const switchCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_2",

		/**
		 * @note Required to prevent the hidden, absolutely
		 * positioned input from upsetting the layout.
		 */
		position: "relative",
	}),
	{
		selectors: {
			[`&${HOVER}`]: {
				cursor: "pointer",
			},
		},
	},
]);

export const switchLabelCSS = style([
	sprinkles({
		fontStyle: "bodyMd",
		color: "text_high_contrast",
	}),
]);

export const switchIndicatorCSS = style([
	sprinkles({
		borderRadius: "pill",
	}),
	{
		background: vars.color.switch_background,
		width: SWITCH_WIDTH,
		height: SWITCH_HEIGHT,

		...withPrefersMotion({
			transitionProperty: "background",
			transitionDuration: vars.transitionDuration.short,
			transitionTimingFunction: vars.ease.quart_in_out,
		}),

		selectors: {
			"&::before": {
				content: "",
				display: "block",

				margin: SWITCH_MARGIN,
				width: DOT_SIZE,
				height: DOT_SIZE,

				background: vars.color.switch_foreground,

				borderRadius: vars.borderRadius["50%"],

				...withPrefersMotion({
					transitionProperty: "transform",
					transitionDuration: vars.transitionDuration.short,
					transitionTimingFunction: vars.ease.quart_in_out,
				}),
			},

			/** ---------------------------------------------
			 * PRESSED
			 * ----------------------------------------------- */

			// [`${switchCSS}[data-pressed] &`]: {
			// 	borderColor: vars.color.border_element_active,
			// },
			// [`${switchCSS}[data-pressed] &::before`]: {
			// 	background: vars.color.tint_active,
			// },

			/** ---------------------------------------------
			 * SELECTED
			 * ----------------------------------------------- */

			[`${switchCSS}[data-selected] &`]: {
				background: vars.color.switch_background_active,
				// borderColor: vars.color.focus_ring,
			},
			[`${switchCSS}[data-selected] &::before`]: {
				// background: vars.color.button_default,
				transform: "translateX(100%)",
			},

			/** ---------------------------------------------
			 * FOCUSED
			 * ----------------------------------------------- */

			[`${switchCSS}[data-focused] &`]: {
				...a11yFocusStyleRule,
				// 	background: vars.color.switch_background_active,
				// 	// borderColor: vars.color.focus_ring,
			},
			[`${switchCSS}[data-focused] &::before`]: {},
		},
	},
]);
