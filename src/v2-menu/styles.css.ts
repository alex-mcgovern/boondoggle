import { recipe } from "@vanilla-extract/recipes";
import {
	animateFadeIn,
	a11yFocus,
	a11yDisabled,
	variantColorOverlay,
	vars,
	elementHeight,
	elementPaddingRaw,
	NOT_DISABLED,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";
import { style } from "@vanilla-extract/css";
import { withPrefersMotion } from "../css-utils";
import { calc } from "@vanilla-extract/css-utils";

export const menuCSS = style([
	animateFadeIn,
	a11yFocus,
	sprinkles({
		background: "background",
		border: "border_default",
		borderRadius: "md",
		boxShadow: "md",
		padding: "space_1",
		overflowY: "auto",
	}),
	{
		maxHeight: "15rem",
		// minWidth: "10rem",
	},
]);

export const menuButtonCSS = recipe({
	base: [
		a11yFocus,
		sprinkles({
			flexShrink: "0",
			flexGrow: "1",
			// aspectRatio: "square",
			border: "border_default",

			fontStyle: "bodyMd",
			display: "flex",
			gap: "space_1",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "md",
		}),
		{ width: "fit-content" },
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

export const menuItemCSS = recipe({
	base: [
		sprinkles({
			padding: "space_1",
			borderRadius: "md",

			width: "100%",
			display: "flex",
			alignItems: "center",
			gap: "space_1",

			fontStyle: "bodyMd",
			fontWeight: "normal",
			color: "text_low_contrast",
			textAlign: "left",

			textDecoration: "none",
		}),
		a11yDisabled,
		a11yFocus,
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			selectors: {
				[`&${NOT_DISABLED}:is(:hover,[data-hovered])`]: {
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				[`&${NOT_DISABLED}:is(:focus,[data-focused])`]: {
					outline: 0,
					cursor: "pointer",
					background: vars.color.tint_hover,
				},
				[`&${NOT_DISABLED}:is(:active,[data-selected])`]: {
					background: vars.color.tint_active,
				},
			},
		},
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		colorOverlay: variantColorOverlay,
		size: {
			lg: [
				{ minHeight: elementHeight.lg },
				{
					padding: `${elementPaddingRaw.lg.y} ${calc.subtract(
						elementPaddingRaw.lg.x,
						vars.spacing.space_1,
					)}`,
				},
			],
			md: [
				{ minHeight: elementHeight.md },
				{
					padding: `${elementPaddingRaw.md.y} ${calc.subtract(
						elementPaddingRaw.md.x,
						vars.spacing.space_1,
					)}`,
				},
			],
			sm: [
				{ minHeight: elementHeight.sm },
				{
					padding: `${elementPaddingRaw.sm.y} ${calc.subtract(
						elementPaddingRaw.sm.x,
						vars.spacing.space_1,
					)}`,
				},
			],
		},
	},
});

export const menuHeaderCSS = recipe({
	base: [
		sprinkles({
			color: "text_low_contrast",
			fontStyle: "bodySm",
			marginY: "space_2",
		}),
	],
	variants: {
		size: {
			lg: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.lg.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.lg.x,
					vars.spacing.space_1,
				),
			},
			md: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.md.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.md.x,
					vars.spacing.space_1,
				),
			},
			sm: {
				paddingLeft: calc.subtract(
					elementPaddingRaw.sm.x,
					vars.spacing.space_1,
				),
				paddingRight: calc.subtract(
					elementPaddingRaw.sm.x,
					vars.spacing.space_1,
				),
			},
		},
	},
});
