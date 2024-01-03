import { recipe } from "@vanilla-extract/recipes";
import { inputBg } from "../../_css/input.css";
import {
	DISABLED,
	a11yDisabled,
	a11yFocusStyleRule,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const groupCSS = recipe({
	base: [
		a11yDisabled,
		inputBg,
		sprinkles({
			height: "space_8",
			width: "100%",

			display: "flex",
			alignItems: "center",

			border: "border_element",
			borderRadius: "md",

			fontStyle: "bodySm",
			position: "relative",

			overflow: "hidden",
		}),
		withPrefersMotion({
			transitionProperty: "background, color, border-color, outline",
			transitionDuration: vars.transitionDuration.short,
			transitionTimingFunction: vars.ease.quart_in_out,
		}),
		{
			outline: "0px solid transparent",
			selectors: {
				[`&:not(${DISABLED})[data-focus-within]`]: {
					outline: "none",
					...a11yFocusStyleRule,
				},
				[`&:not(${DISABLED})[data-focus-visible]`]: {
					...a11yFocusStyleRule,
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
