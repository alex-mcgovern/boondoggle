import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../css-utils";
import { vars } from "../../../index.css";

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
	opacity: 0.4,
	...withPrefersMotion({
		transition: `opacity ${vars.transitionDuration.short} ease`,
	}),

	/**
	 * @note There was a bug with the table actions wrapper which
	 * caused the sort icon to appear over dropdowns. This is
	 * an ugly fix to make sure the sort icon is always behind.
	 */
	zIndex: -1,
});

globalStyle(`${sortControlBase}:hover ${sortIconStyle}`, {
	opacity: 0.7,
});
