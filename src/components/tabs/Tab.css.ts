// globalStyle(`${wrapper}::-webkit-scrollbar`, {
// 	display: "none",
// });

import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";
import { utilCss } from "../../styles/utils/util_css.css";

// globalStyle(`${wrapper} > *:first-child`, {
// 	"@media": {
// 		[MEDIA_QUERY_MOBILE]: {
// 			marginLeft: vars.spacing.space_4,
// 		},
// 		[MEDIA_QUERY_TABLET]: {
// 			marginLeft: vars.spacing.none,
// 		},
// 	},
// });

// globalStyle(`${wrapper} > *:last-child`, {
// 	"@media": {
// 		[MEDIA_QUERY_MOBILE]: {
// 			marginRight: vars.spacing.space_4,
// 		},
// 	},
// });

export const tab = recipe({
	base: [
		utilCss({
			flexShrink: "0",
			paddingBottom: "space_1",
			paddingX: "space_4",
		}),
	],
	defaultVariants: {
		active: false,
	},
	variants: {
		active: {
			false: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid transparent`,
				},
			],
			true: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid ${vars.color.button_default}`,
				},
			],
		},
	},
});
