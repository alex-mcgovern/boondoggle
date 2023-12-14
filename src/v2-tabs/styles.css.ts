import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { withPrefersMotion } from "../css-utils";
import {
	ACTIVE,
	FOCUS_VISIBLE,
	HOVER,
	variantColorOverlay,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

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

export const tabCSS = style([
	sprinkles({
		position: "relative",

		fontStyle: "bodyMd",
		fontWeight: "medium",
		color: "text_low_contrast",
		textDecoration: "none",
		whiteSpace: "nowrap",

		paddingX: "space_3",
		paddingY: "space_1",
		marginY: "space_1",
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
				color: vars.color.text_high_contrast,
			},
		},
	},
]);

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
		// paddingY: "space_1",
	}),
	{
		msOverflowStyle: "none",
		overflowX: "scroll",
		overflowY: "visible",
		scrollbarGutter: "none",
		scrollbarWidth: "none",
		selectors: {
			"&::-webkit-scrollbar": {
				display: "none",
			},
		},
	},
]);

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

export const tabIndicatorCSS = style([
	sprinkles({
		position: "absolute",
		borderRadius: "md",
		zIndex: "-1",
		background: "button_default",
		height: "space_0.5",
	}),
	{
		right: 0,
		left: 0,
		bottom: 0,
		top: calc.subtract(
			calc.add("100%", vars.spacing.space_1),
			vars.spacing["space_0.5"],
		),

		userSelect: "none",
		pointerEvents: "none",
	},
]);
