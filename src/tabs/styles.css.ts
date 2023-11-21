import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { ColorOverlayBlue } from "../button/stories";
import { withPrefersMotion } from "../css-utils";
import { variantColorOverlay, vars } from "../index.css";
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

export const tabCSS = recipe({
	base: [
		sprinkles({
			flexShrink: "0",
			paddingBottom: "space_1",
		}),
	],
	defaultVariants: {
		active: false,
	},
	variants: {
		isTabFullWidth: {
			true: [
				sprinkles({
					flexGrow: "1",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}),
			],
			false: [],
		},
		active: {
			false: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid transparent`,
				},
			],
			true: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid ${vars.color.button_default}`,
				},
			],
		},
	},
});

export const tabsSectionCss = recipe({
	base: [
		sprinkles({
			marginY: "space_2",
			marginX: "auto",
			paddingX: "space_4",
		}),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [sprinkles({ maxWidth: "main_lg" })],
			md: [sprinkles({ maxWidth: "main_md" })],
			sm: [sprinkles({ maxWidth: "main_sm" })],
		},
	},
});

export const tabListCSS = style([
	sprinkles({
		alignItems: "center",
		paddingTop: "space_1",
		borderBottom: "border_default",
		display: "flex",
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
		fontStyle: "bodySm",
		borderRadius: "pill",
		padding: "space_1",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		fontWeight: "semibold",
		height: "space_4",
		minWidth: "space_4",
		color: "text_low_contrast",
	}),
	{
		background: vars.color.button_tint,
		...withPrefersMotion({
			animation: `${scaleUpKeyframes} ${vars.transitionDuration.medium} ease forwards`,
		}),
	},
]);
