// globalStyle(`${wrapper}::-webkit-scrollbar`, {
// 	display: "none",
// });

import { recipe } from "@vanilla-extract/recipes";
import { v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

// globalStyle(`${wrapper} > *:first-child`, {
// 	"@media": {
// 		[MOBILE]: {
// 			marginLeft: v.spacing.space_4,
// 		},
// 		[TABLET]: {
// 			marginLeft: v.spacing.none,
// 		},
// 	},
// });

// globalStyle(`${wrapper} > *:last-child`, {
// 	"@media": {
// 		[MOBILE]: {
// 			marginRight: v.spacing.space_4,
// 		},
// 	},
// });

export const tab = recipe({
	base: [
		css({
			flexShrink: "0",
			paddingBottom: "space_1",
		}),
	],
	defaultVariants: {
		active: false,
	},
	variants: {
		active: {
			false: [
				{
					borderBottom: `${v.spacing["space_0.5"]} solid transparent`,
				},
			],
			true: [
				{
					borderBottom: `${v.spacing["space_0.5"]} solid ${v.color.btn_default}`,
				},
			],
		},
	},
});
