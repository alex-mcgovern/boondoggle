import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { css } from "../../src/styles/utils/util_css.css";

export const section = recipe({
	base: [
		css({
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
			lg: [css({ maxWidth: "main_lg" })],
			md: [css({ maxWidth: "main_md" })],
			sm: [css({ maxWidth: "main_sm" })],
		},
	},
});

export const tabList = style([
	css({
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
