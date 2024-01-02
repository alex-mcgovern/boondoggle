import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocusStyleRule,
	variantColorOverlay,
	vars,
} from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const groupCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",

			border: "border_element",
			borderRadius: "md",
			background: "tint_default",

			fontStyle: "bodyMd",
		}),
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			width: "100%",

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
		isDisabled: {
			true: [a11yDisabled],
			false: {},
		},
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});
