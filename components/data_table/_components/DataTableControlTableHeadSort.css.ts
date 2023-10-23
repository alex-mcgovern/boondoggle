import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../../src/styles/theme.css";
import { createAccessibleTransition } from "../../../src/styles/utils/create_accessible_transition";

const sortControlBase = style({});

export const getSortControlStyle = recipe({
	base: [sortControlBase],
	variants: {
		isSorted: {
			false: {},
			true: {},
		},
	},
});

export const sortIconStyle = style({
	opacity: 0,
	...createAccessibleTransition({
		transition: `opacity ${vars.transitionDuration.short} ease`,
	}),
});

globalStyle(`${sortControlBase}:hover ${sortIconStyle}`, {
	opacity: 0.5,
});
