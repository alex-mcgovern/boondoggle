import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocus,
	elementHeight,
	elementPadding,
} from "../../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const selectCSS = recipe({
	base: [
		sprinkles({
			width: "100%",
			fontStyle: "bodyMd",
		}),
		a11yDisabled,
		a11yFocus,
		{ resize: "none" },
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		size: {
			lg: [elementPadding.lg, { height: elementHeight.lg }],
			md: [elementPadding.md, { height: elementHeight.md }],
			sm: [elementPadding.sm, { height: elementHeight.sm }],
		},
	},
});
