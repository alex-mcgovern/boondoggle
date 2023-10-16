import { recipe } from "@vanilla-extract/recipes";

import { utilCss } from "../../styles/utils/util_css.css";

export const getMainStyles = recipe({
	base: [
		utilCss({
			marginX: "auto",
			marginY: "space_6",
			paddingX: "space_4",
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
