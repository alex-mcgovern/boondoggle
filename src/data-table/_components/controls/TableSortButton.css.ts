import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../css-utils";
import { vars } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

const sortControlBase = style({});

export const getSortControlStyle = recipe({
	base: [
		sortControlBase,
		sprinkles({
			fontStyle: "bodySm",
		}),
	],
	variants: {
		isSorted: {
			false: {},
			true: {},
		},
	},
});

export const sortIconStyle = style({
	opacity: 0.4,
	...withPrefersMotion({
		transition: `opacity ${vars.transitionDuration.short} ease`,
	}),
});

globalStyle(`${sortControlBase}:hover ${sortIconStyle}`, {
	opacity: 0.7,
});
