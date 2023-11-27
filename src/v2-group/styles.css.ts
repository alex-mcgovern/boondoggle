import { globalStyle } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";
import {
	NOT_DISABLED,
	a11yFocusStyleRule,
	variantColorOverlay,
	vars,
} from "../index.css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";

export const groupCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",
			borderRadius: "md",
			// overflow: "hidden",
			background: "background",
			border: "border_default",
		}),
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
		{
			width: "fit-content",
			selectors: {
				[`&${NOT_DISABLED}:is(:hover,[data-hovered])`]: {
					// cursor: "text",
					background: vars.color.tint_default,
				},
				// [`&${NOT_DISABLED}:is(:focus,[data-focused])`]: {
				// 	outline: 0,
				// 	background: vars.color.tint_default,
				// },
				"&[data-hovered]": {
					borderColor: vars.color.border_hover,
				},
				// "&[data-focus-within]": {
				// 	...a11yFocusStyleRule,
				// },
			},
		},
	],
	variants: {
		isDisabled: {
			true: {},
			false: {},
		},
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});

globalStyle(`${groupCSS()} *[data-slot-side='right']`, {
	borderTopLeftRadius: "0 !important",
	borderBottomLeftRadius: "0 !important",
	borderTop: "0 !important",
	borderRight: "0 !important",
	borderBottom: "0 !important",
});
