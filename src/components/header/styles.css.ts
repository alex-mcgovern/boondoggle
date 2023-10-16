import { recipe } from "@vanilla-extract/recipes";

import { utilCss } from "../../styles/utils/util_css.css";

export const getHeaderStyles = recipe({
	base: [
		utilCss({
			marginBottom: "space_4",
			marginTop: "space_4",
			marginX: "auto",
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
