import { createContainer, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

const scrollableContainer = createContainer();

export const nonScrollableWrapperCSS = style({
	height: "100dvh",
	overflow: "hidden",
});

export const scrollableMainCSS = recipe({
	base: [
		sprinkles({
			paddingX: "space_4",
			overflowY: "auto",
			overflowX: "hidden",
			height: "100dvh",
			width: "100%",
		}),
		{
			containerName: scrollableContainer,
			containerType: "inline-size",
			scrollbarGutter: "stable",
		},
	],
	defaultVariants: {
		headers: "1",
	},
	variants: {
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

export const scrollableMainInnerCSS = recipe({
	base: [
		{
			marginLeft: calc.subtract("50%", "50cqw"),
			marginRight: calc.subtract("50%", "50cqw"),
		},
		// sprinkles({
		// 	marginX: "auto",
		// }),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [
				sprinkles({ maxWidth: "main_lg" }),
				{
					marginLeft: calc.subtract(
						"50cqw",
						calc.divide(vars.width.main_lg, 2),
					),
					marginRight: calc.subtract(
						"50cqw",
						calc.divide(vars.width.main_lg, 2),
					),
				},
			],
			md: [sprinkles({ maxWidth: "main_md" })],
			sm: [sprinkles({ maxWidth: "main_sm" })],
		},
	},
});
