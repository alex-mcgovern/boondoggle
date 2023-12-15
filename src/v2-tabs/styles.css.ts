import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	HOVER,
	NOT_DISABLED,
	a11yDisabled,
	hideScrollbar,
	variantColorOverlay,
	vars,
} from "../index.css";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * CONFIG / CONSTANTS
 * ------------------------------------------------------------------------------- */

const TAB_HEIGHT = vars.spacing.space_8;
// const TAB_PADDING_X = vars.spacing.space_2;
const TAB_INDICATOR_HEIGHT = vars.spacing["space_0.5"];

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

export const tabListInnerCSS = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			display: "flex",
			gap: "space_6",
			paddingBottom: "space_1",
		}),
		{
			// marginLeft: calc.multiply(TAB_PADDING_X, -1),
			// marginRight: calc.multiply(TAB_PADDING_X, -1),

			overflowX: "scroll",
			overflowY: "visible",
		},
		hideScrollbar,
	],
	defaultVariants: {
		justify: "start",
	},
	variants: {
		justify: {
			start: {
				justifyContent: "flex-start",
			},
			"space-evenly": {
				justifyContent: "space-evenly",
			},
		},
	},
});

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

export const tabOuterCSS = style([
	a11yDisabled,
	sprinkles({
		position: "relative",

		display: "inline-flex",
		placeItems: "center",
		flexShrink: "0",

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
		// paddingLeft: TAB_PADDING_X,
		// paddingRight: TAB_PADDING_X,

		selectors: {
			[`&${NOT_DISABLED}${HOVER}`]: {
				cursor: "pointer",
				color: vars.color.text_high_contrast,
				// background: vars.color.tab_hover_color,
			},
			// [`&${NOT_DISABLED}${ACTIVE}`]: {
			// 	// color: vars.color.text_high_contrast,
			// 	// background: vars.color.tab_hover_color,
			// },
			"&[data-selected]": {
				color: vars.color.button_default,
			},
			[`&[data-selected]${HOVER}`]: {
				// background: vars.color.tab_selected_color,
				color: vars.color.button_default,
			},
		},
	},
]);

export const tabInnerCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_1",
	}),
]);

export const tabIndicatorCSS = style([
	sprinkles({
		position: "absolute",
		zIndex: "-1",
		background: "button_default",
	}),
	{
		height: TAB_INDICATOR_HEIGHT,

		// right: TAB_PADDING_X,
		// left: TAB_PADDING_X,

		inset: 0,
		top: calc.add("100%", TAB_INDICATOR_HEIGHT),

		userSelect: "none",
		pointerEvents: "none",
	},
]);

/** -----------------------------------------------------------------------------
 * TAB COUNT
 * ------------------------------------------------------------------------------- */

const TAB_COUNT_SIZE = "space_4" satisfies
	| Sprinkles["width"]
	| Sprinkles["maxWidth"]
	| Sprinkles["height"];

export const tabCountCSS = style([
	variantColorOverlay.blue,
	sprinkles({
		paddingY: "space_0.5",
		paddingX: "space_1",
		borderRadius: "pill",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: "0",
		flexGrow: "0",

		textAlign: "center",
		fontWeight: "semibold",

		color: "text_low_contrast",
		background: "button_tint",

		height: TAB_COUNT_SIZE,
		minWidth: TAB_COUNT_SIZE,
		marginX: "space_0.5",
	}),
	{
		fontSize: "0.625rem",
		lineHeight: "0.625rem",
	},
]);
export const tabCountIconCSS = style([
	sprinkles({
		color: "inherit",
		height: TAB_COUNT_SIZE,
		width: TAB_COUNT_SIZE,

		padding: "space_0.5",
	}),
]);
