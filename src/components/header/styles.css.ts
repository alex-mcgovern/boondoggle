import { recipe } from "@vanilla-extract/recipes";

import { style } from "@vanilla-extract/css";
import { utilCss } from "../../styles/utils/util_css.css";

export const header = recipe({
	base: [
		utilCss({
			marginY: "space_4",
			marginX: "auto",

			display: "flex",
			alignItems: "start",
			gap: "space_4",
		}),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [utilCss({ maxWidth: "main_lg" })],
			md: [utilCss({ maxWidth: "main_md" })],
			sm: [utilCss({ maxWidth: "main_sm" })],
		},
	},
});

export const actions = style([utilCss({ marginLeft: "auto" })]);
