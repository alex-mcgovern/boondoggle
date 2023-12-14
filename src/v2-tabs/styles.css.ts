import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { withPrefersMotion } from "../css-utils";
import {
	ACTIVE,
	FOCUS_VISIBLE,
	HOVER,
	hideScrollbar,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * CONFIG / CONSTANTS
 * ------------------------------------------------------------------------------- */

const TAB_SECTION_HEIGHT = vars.spacing.space_8;
const TAB_INDICATOR_HEIGHT = vars.spacing["space_0.5"];

/** -----------------------------------------------------------------------------
 * ANIMATIONS
 * ------------------------------------------------------------------------------- */

const scaleUpKeyframes = keyframes({
	"0%": {
		marginLeft: calc.multiply(vars.spacing.space_12, -1),
		transform: "scale(0.8)",
		opacity: 0,
	},
	"50%": { transform: "scale(0.8)", opacity: 0 },
	"100%": {
		opacity: 1,
	},
});

/** -----------------------------------------------------------------------------
 * TAB LIST
 * ------------------------------------------------------------------------------- */

export const tabListOuterCSS = style([
	sprinkles({
		position: "relative",
		marginY: "space_2",
	}),
	{
		selectors: {
			"&:after": {
				content: "",
				position: "absolute",
				inset: 0,
				width: "inherit",
				borderBottom: `1px solid ${vars.color.border_rule}`,
				zIndex: -10,
			},
		},
	},
]);

export const tabListInnerCSS = style([
	sprinkles({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
	}),
	{
		height: TAB_SECTION_HEIGHT,
		overflowX: "scroll",
		overflowY: "visible",
	},
	hideScrollbar,
]);

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

export const tabCSS = style([
	sprinkles({
		position: "relative",

		fontStyle: "bodyMd",
		fontWeight: "medium",

		color: "text_low_contrast",
		textDecoration: "none",
		whiteSpace: "nowrap",

		paddingX: "space_2",
		paddingY: "space_0.25",
		// marginY: "space_1",
		borderRadius: "md",
	}),
	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		outline: "none",

		selectors: {
			[`&${HOVER}`]: {
				cursor: "pointer",
				color: vars.color.text_high_contrast,
				background: vars.color.tint_hover,
			},
			[`&${ACTIVE}`]: {
				color: vars.color.text_high_contrast,
				background: vars.color.tint_hover,
			},
			[`&${FOCUS_VISIBLE}`]: {
				color: vars.color.text_high_contrast,
				// ...a11yFocusStyleRule,
			},
			"&[data-selected]": {
				color: vars.color.button_default,
			},
			[`&[data-selected]${HOVER}`]: {
				background: vars.color.button_tint,
			},
		},
	},
]);

export const tabIndicatorCSS = style([
	sprinkles({
		position: "absolute",
		zIndex: "-1",
		background: "button_default",
	}),
	{
		height: TAB_INDICATOR_HEIGHT,

		right: 0,
		left: 0,
		bottom: 0,
		top: calc.add("100%", "1px"),
		// top: calc.subtract(TAB_SECTION_HEIGHT, TAB_INDICATOR_HEIGHT),

		userSelect: "none",
		pointerEvents: "none",
	},
]);

/** -----------------------------------------------------------------------------
 * TAB COUNT
 * ------------------------------------------------------------------------------- */

export const tabCountCSS = style([
	variantColorOverlay.blue,
	sprinkles({
		borderRadius: "pill",
		padding: "space_1",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		fontWeight: "semibold",
		height: "space_5",
		flexShrink: "0",
		minWidth: "space_5",
		color: "text_low_contrast",
	}),
	{
		// transform: "translateY(0.0625rem)",
		fontSize: "0.625rem",
		lineHeight: "0.625rem",
		background: vars.color.button_tint,
		...withPrefersMotion({
			animation: `${scaleUpKeyframes} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
		}),
	},
]);
