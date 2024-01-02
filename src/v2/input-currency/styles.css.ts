import { recipe } from "@vanilla-extract/recipes";
import {
	FOCUS,
	NOT_DISABLED,
	a11yFocusStyleRule,
	elementHeight,
	elementPadding,
} from "../../index.css";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const numberInputCSS = recipe({
	base: [
		sprinkles({
			background: "transparent",
			fontStyle: "bodyMd",
			border: "border_element",
			borderRadius: "md",
			width: "100%",
			color: "text_high_contrast",
		}),
		{
			selectors: {
				[`&${NOT_DISABLED}${FOCUS}`]: {
					...a11yFocusStyleRule,
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
