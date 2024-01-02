import { globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { FOCUS, variantColorOverlay, vars } from "../../index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const groupCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",
		}),
		withPrefersMotion({
			transition: `background ${vars.transitionDuration.short} ease`,
		}),
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
	borderTopRightRadius: vars.borderRadius.md,
	borderBottomRightRadius: vars.borderRadius.md,
	borderTopLeftRadius: "0 !important",
	borderBottomLeftRadius: "0 !important",
});

globalStyle(`${groupCSS()} *[data-slot-side='left']`, {
	borderTopLeftRadius: vars.borderRadius.md,
	borderBottomLeftRadius: vars.borderRadius.md,
	borderTopRightRadius: "0 !important",
	borderBottomRightRadius: "0 !important",
});

globalStyle(
	`*[data-slot-side='left'] + *[data-slot-side='right']:not(${FOCUS})`,
	{
		borderLeft: "0 !important",
	},
);
globalStyle(`*[data-slot-side='left'] + *[data-slot-side='right']${FOCUS}`, {
	marginLeft: "-1px",
});
