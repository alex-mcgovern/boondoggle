import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	ACTIVE,
	HOVER,
	a11yFocus,
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
	a11yFocus,
	sprinkles({
		whiteSpace: "nowrap",

		fontStyle: "bodyMd",
		fontWeight: "medium",

		color: "text_low_contrast",

		paddingX: "space_3",
		paddingY: "space_1",

		borderRadius: "md",
	}),
	withPrefersMotion({
		transitionProperty: "color, background",
		transitionDuration: vars.transitionDuration.short,
		transitionTimingFunction: vars.ease.quart_in_out,
	}),
	{
		selectors: {
			[`&${HOVER}`]: {
				cursor: "pointer",
				color: vars.color.text_high_contrast,
				// background: vars.color.tint_hover,
			},
			[`&${ACTIVE}`]: {
				color: vars.color.text_high_contrast,
				background: vars.color.tint_hover,
			},
			"&[data-selected]": {
				color: vars.color.text_high_contrast,
				background: vars.color.tint_hover,
			},
		},
	},
]);

export const tabListCSS = style([
	sprinkles({
		position: "relative",

		marginY: "space_2",
		paddingY: "space_1",

		alignItems: "center",
		borderBottom: "border_rule",
		display: "flex",
		gap: "space_2",
	}),
	{
		msOverflowStyle: "none",
		overflowX: "scroll",
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
		background: "button_default",
	}),
	{
		content: " ",
		height: "0.125rem",
		width: "20px",
		top: calc.subtract("100%", 1),
	},
]);
