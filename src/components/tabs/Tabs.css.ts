import { recipe } from "@vanilla-extract/recipes";
import { utilCss } from "../../styles/utils/util_css.css";

export const wrapper = recipe({
	base: [
		utilCss({
			alignItems: "center",
			borderBottom: "border_default",
			display: "flex",
			marginY: "space_4",
			marginX: "auto",
			paddingX: "space_4",
		}),
		{
			msOverflowStyle: "none",
			overflowX: "scroll",
			scrollbarGutter: "none",
			scrollbarWidth: "none",
			selectors: {
				"&::-webkit-scrollbar": {
					display: "none",
				},
			},
		},
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
