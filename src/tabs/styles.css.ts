import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
	a11yFocus,
	elementHeight,
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

export const tabsSectionCss = recipe({
	base: [
		sprinkles({
			marginY: "space_3",
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
		display: "flex",
		borderRadius: "md",
		width: "min-content",
		isolation: "isolate",
	}),
	{
		height: "fit-content",
		background: vars.color.tabs_background,
	},
]);

export const tabCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",
			gap: "space_1",
			flexShrink: "0",

			fontStyle: "bodyMd",
			color: "text_low_contrast",
			whiteSpace: "nowrap",
			textDecoration: "none",

			borderRadius: "md",
			paddingX: "space_3",
			paddingY: "space_1",
			width: "max-content",
		}),
		{ height: elementHeight.sm },
		a11yFocus,
		withPrefersMotion({
			transition: `ease ${vars.transitionDuration.short} ease`,
			transitionProperty: "color, background-color, border-color",
		}),
	],

	variants: {
		isActive: {
			true: [
				sprinkles({
					background: "tab_active_background",
					boxShadow: "sm",
				}),
				{
					border: `1px solid ${vars.color.button_secondary_border_highlight}`,
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
							background: vars.color.tab_active_background,
							color: vars.color.button_secondary_border_highlight,
						},
					},
				},
			],
			false: {
				selectors: {
					[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
						background: vars.color.tint_4,
						color: vars.color.text_high_contrast,
					},
				},
			},
		},
		colorOverlay: variantColorOverlay,
	},
});

export const tabCountCSS = style([
	variantColorOverlay.blue,
	sprinkles({
		borderRadius: "pill",
		padding: "space_0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		fontWeight: "semibold",
		height: "space_5",
		minWidth: "space_5",
		color: "text_low_contrast",
	}),
	{
		// transform: "translateY(0.0625rem)",
		fontSize: "0.625rem",
		lineHeight: "0.625rem",
		background: vars.color.button_tint,
		...withPrefersMotion({
			animation: `${scaleUpKeyframes} ${vars.transitionDuration.medium} ease forwards`,
		}),
	},
]);
