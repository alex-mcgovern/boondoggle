import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocusStyleRule,
	unstyledInput,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const textFieldSlotCSS = recipe({
	base: [
		sprinkles({
			minWidth: "space_8",

			display: "flex",
			placeItems: "center",
			// gap: "space_0.5",

			position: "absolute",

			// paddingX: "space_1",
		}),
		{
			top: 0,
			bottom: 0,
		},
	],
	variants: {
		side: {
			right: {
				right: 0,
			},
			left: {
				left: 0,
			},
		},
	},
});

export const slottedCSS = recipe({
	base: [
		sprinkles({
			minWidth: "space_6",
			display: "flex",
			placeItems: "center",

			gap: "space_1",

			fontStyle: "bodyMd",
		}),
		{
			selectors: {
				"&:not(:last-child)": {
					// marginRight: vars.spacing.space_2,
				},
			},
		},
	],
	variants: {
		isClickable: {
			true: {
				pointerEvents: "auto",
			},
			false: {
				pointerEvents: "none",
				color: vars.color.text_low_contrast,
				selectors: {
					"&:last-child": {
						marginRight: vars.spacing.space_1,
					},
					"&:first-child": {
						marginLeft: vars.spacing.space_1,
					},
				},
			},
		},
	},
});

export const actionsCSS = style([
	sprinkles({
		minWidth: "space_8",

		display: "flex",
		placeItems: "center",
		gap: "space_1",

		position: "absolute",
	}),
	{
		top: 0,
		bottom: 0,
	},
]);

export const groupCSS = recipe({
	base: [
		a11yDisabled,
		sprinkles({
			height: "space_8",
			width: "100%",

			display: "flex",
			alignItems: "center",

			border: "border_element",
			borderRadius: "md",

			background: "tint_default",

			fontStyle: "bodySm",
			position: "relative",

			overflow: "hidden",
		}),
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			selectors: {
				"&[data-hovered]": {
					borderColor: vars.color.border_element_active,
				},
				"&[data-focus-within]": {
					outline: "none",
					...a11yFocusStyleRule,
					borderColor: vars.color.focus_border,
				},
				"&[data-focus-visible]": {
					...a11yFocusStyleRule,
					borderColor: vars.color.focus_border,
				},
			},
		},
	],
	variants: {
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});

export const textFieldCSS = recipe({
	base: [
		{
			selectors: {},
		},
	],
	variants: {
		isDisabled: {
			true: [
				{
					selectors: {
						"&:hover": {
							cursor: "not-allowed !important",
						},
					},
				},
			],
			false: [],
		},
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});

export const textFieldInputCSS = recipe({
	base: [
		unstyledInput,
		a11yDisabled,
		sprinkles({
			height: "space_8",

			paddingX: "space_3",
			width: "100%",

			fontStyle: "bodySm",

			color: "text_high_contrast",
		}),

		withPrefersMotion({
			transitionProperty: "color, background",
			transitionDuration: vars.transitionDuration.short,
			transitionTimingFunction: vars.ease.quart_in_out,
		}),
	],

	variants: {
		hasSlotLeft: {
			true: {},
			false: {
				borderTopLeftRadius: vars.borderRadius.md,
				borderBottomLeftRadius: vars.borderRadius.md,
			},
		},
		hasSlotRight: {
			true: {},
			false: {
				borderTopRightRadius: vars.borderRadius.md,
				borderBottomRightRadius: vars.borderRadius.md,
			},
		},
	},
});

export const clearButtonCSS = style({});

globalStyle(
	`${textFieldInputCSS()}:has(input:placeholder-shown) > ${clearButtonCSS}`,
	{
		display: "none",
	},
);
