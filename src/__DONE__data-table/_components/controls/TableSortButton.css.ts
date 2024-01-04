import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { HOVER, vars } from "../../../index.css";
import { withPrefersMotion } from "../../../__DONE__css-utils";
import { sprinkles } from "../../../sprinkles/index.css";

const sortControlBase = style({});

export const getSortControlStyle = recipe({
	base: [
		sortControlBase,
		sprinkles({
			flexShrink: "0",
			display: "flex",
			alignItems: "center",
			color: "text_low_contrast",
			marginRight: "auto",
			gap: "space_2",
		}),
		withPrefersMotion({
			transition: `color ${vars.transitionDuration.short} ease`,
		}),
		{
			[`&${HOVER}`]: {
				color: vars.color.text_high_contrast,
			},
		},
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

	/**
	 * @note There was a bug with the table actions wrapper which
	 * caused the sort icon to appear over dropdowns. This is
	 * an ugly fix to make sure the sort icon is always behind.
	 */
	zIndex: -1,
});

globalStyle(
	`${getSortControlStyle({ isSorted: false })}:hover ${sortIconStyle}`,
	{
		opacity: 0.7,
	},
);
