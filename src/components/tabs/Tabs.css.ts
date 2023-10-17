import { recipe } from "@vanilla-extract/recipes";
import { utilCss } from "../../styles/utils/util_css.css";
import { style } from "@vanilla-extract/css";

export const section = recipe({
	base: [
		utilCss({
			marginY: "space_4",
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

export const tabList = style([
	utilCss({
		alignItems: "center",
		borderBottom: "border_default",
		display: "flex",
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
]);
