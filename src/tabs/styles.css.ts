import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { utilCss, vars } from "../index.css";

export const tab = recipe({
	base: [
		utilCss({
			flexShrink: "0",
			paddingBottom: "space_1",
		}),
	],
	defaultVariants: {
		active: false,
	},
	variants: {
		isTabFullWidth: {
			true: [
				utilCss({
					flexGrow: "1",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}),
			],
			false: [],
		},
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
