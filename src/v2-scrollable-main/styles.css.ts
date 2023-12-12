import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const nonScrollableWrapperCSS = style({
	height: "100dvh",
	overflow: "hidden",
});

export const scrollableMainCSS = recipe({
	base: [
		sprinkles({
			marginX: "auto",
			paddingX: "space_4",
			overflowY: "auto",
			overflowX: "hidden",
			height: "100dvh",
		}),
		{
			scrollbarGutter: "stable",
		},
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [sprinkles({ maxWidth: "main_lg" })],
			md: [sprinkles({ maxWidth: "main_md" })],
			sm: [sprinkles({ maxWidth: "main_sm" })],
		},
		headers: {
			"0": {
				height: "100dvh",
			},
			"1": {
				height: calc.subtract("100dvh", vars.height.topBar),
			},
			"2": {
				height: calc.subtract(
					"100dvh",
					vars.height.topBar,
					vars.height.topBar,
				),
			},
		},
	},
});
