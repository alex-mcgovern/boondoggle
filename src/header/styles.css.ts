import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { utilCss } from "../index.css";

export const headerCSS = recipe({
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

export const innerCSS = recipe({
	base: [
		utilCss({
			alignItems: "center",
			display: "flex",
			gap: "space_4",
			minHeight: "space_12",
		}),
	],
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

export const actionsCSS = style([utilCss({ marginLeft: "auto" })]);
