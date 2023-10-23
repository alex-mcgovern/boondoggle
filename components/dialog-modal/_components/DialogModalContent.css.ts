import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { utilCss } from "../../../src/styles/utils/util_css.css";

export const dialogContentOuterStyle = style([
	utilCss({
		maxWidth: "100%",
		overflowY: "auto",
		width: "100%",
	}),
	{
		overflowX: "hidden",
	},
]);

export const getDialogContentInnerStyle = recipe({
	base: [
		utilCss({
			height: "100%",
		}),
		{
			transition: "max-height 100ms ease",
		},
	],
	defaultVariants: {
		hasPadding: true,
	},
	variants: {
		hasPadding: {
			false: {},
			true: [utilCss({ padding: "space_4" })],
		},
	},
});
