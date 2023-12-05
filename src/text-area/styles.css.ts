import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	a11yDisabled,
	a11yFocus,
	elementHeight,
	elementPadding,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

const size = styleVariants({
	lg: [elementPadding.lg, { minHeight: elementHeight.lg }],
	md: [elementPadding.md, { minHeight: elementHeight.md }],
	sm: [elementPadding.sm, { minHeight: elementHeight.sm }],
});

export const getTextAreaStyles = recipe({
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
		size,
	},
});
