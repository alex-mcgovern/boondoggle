import { recipe } from "@vanilla-extract/recipes";
import { elementPadding, elementHeight } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const numberInputCSS = recipe({
	base: [
		sprinkles({
			background: "transparent",
			fontStyle: "bodyMd",
		}),
		{
			border: 0,
			selectors: {
				"&:is(:focus,[data-focused])": {
					outline: 0,
				},
			},
		},
	],
	variants: {
		size: {
			lg: [elementPadding.lg, { height: elementHeight.lg }],
			md: [elementPadding.md, { height: elementHeight.md }],
			sm: [elementPadding.sm, { height: elementHeight.sm }],
		},
	},
});
