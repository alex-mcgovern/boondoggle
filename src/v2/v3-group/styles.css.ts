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
			// boxShadow: `${vars.boxShadow.xs}, ${vars.boxShadow.inset_input}`,
			// width: "fit-content",
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

// globalStyle(`${groupCSS()} *[data-slot-side='right']`, {
// 	borderTopRightRadius: vars.borderRadius.md,
// 	borderBottomRightRadius: vars.borderRadius.md,
// 	borderTopLeftRadius: "0 !important",
// 	borderBottomLeftRadius: "0 !important",

// 	// borderBottom: "0 !important",
// 	// borderRight: "0 !important",
// 	// borderTop: "0 !important",
// });

// globalStyle(`${groupCSS()} *[data-slot-side='left']`, {
// 	borderTopLeftRadius: vars.borderRadius.md,
// 	borderBottomLeftRadius: vars.borderRadius.md,
// 	borderTopRightRadius: "0 !important",
// 	borderBottomRightRadius: "0 !important",
// });

// globalStyle(
// 	`*[data-slot-side='left'] + *[data-slot-side='right']:not(${FOCUS})`,
// 	{
// 		borderLeft: "0 !important",
// 	},
// );
// globalStyle(`*[data-slot-side='left'] + *[data-slot-side='right']${FOCUS}`, {
// 	marginLeft: "-1px",
// });
