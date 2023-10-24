import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { v, motion } from "../../../style.css";
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
	...motion({
		transition: `opacity ${v.duration.short} ease`,
	}),
});

globalStyle(`${sortControlBase}:hover ${sortIconStyle}`, {
	opacity: 0.5,
});
