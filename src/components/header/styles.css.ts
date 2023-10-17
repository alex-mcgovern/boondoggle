import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { utilCss } from "../../styles/utils/util_css.css";

export const header = recipe({
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

export const inner = recipe({
	base: [utilCss({ alignItems: "center", display: "flex", gap: "space_4" })],
	defaultVariants: {
		hasTabs: false,
	},
	variants: {
		hasTabs: {
			false: [
				utilCss({
					paddingBottom: "space_4",
					borderBottom: "border_default",
				}),
			],
			true: [],
		},
	},
});

export const actions = style([utilCss({ marginLeft: "auto" })]);
