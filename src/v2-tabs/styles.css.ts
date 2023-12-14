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

const TAB_HEIGHT = vars.spacing.space_8;
const TAB_PADDING_X = vars.spacing.space_2;
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
		// gap: "space_2",
		paddingBottom: "space_1",
	}),
	{
		marginLeft: calc.multiply(TAB_PADDING_X, -1),
		marginRight: calc.multiply(TAB_PADDING_X, -1),

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

		display: "inline-flex",
		placeItems: "center",

		fontStyle: "bodyMd",
		fontWeight: "medium",

		color: "text_low_contrast",
		textDecoration: "none",
		whiteSpace: "nowrap",

		paddingY: "space_0.25",
		borderRadius: "md",
	}),
	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		outline: "none",

		height: TAB_HEIGHT,
		paddingLeft: TAB_PADDING_X,
		paddingRight: TAB_PADDING_X,

		selectors: {
			[`&${HOVER}`]: {
				cursor: "pointer",
				color: vars.color.text_high_contrast,
				background: vars.color.tab_hover_color,
			},
			[`&${ACTIVE}`]: {
				color: vars.color.text_high_contrast,
				background: vars.color.tab_hover_color,
			},
			[`&${FOCUS_VISIBLE}`]: {
				color: vars.color.text_high_contrast,
			},
			"&[data-selected]": {
				color: vars.color.button_default,
			},
			[`&[data-selected]${HOVER}`]: {
				background: vars.color.tab_selected_color,
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

		right: TAB_PADDING_X,
		left: TAB_PADDING_X,
		bottom: 0,
		top: calc.add("100%", TAB_INDICATOR_HEIGHT),

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
		fontSize: "0.625rem",
		lineHeight: "0.625rem",
		background: vars.color.button_tint,
		...withPrefersMotion({
			animation: `${scaleUpKeyframes} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
		}),
	},
]);
