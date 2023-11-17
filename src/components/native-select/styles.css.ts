import { recipe } from "@vanilla-extract/recipes";
import {
	elementFontSize,
	a11yDisabled,
	a11yFocus,
	elementHeight,
	elementPadding,
	utilCss,
} from "../../index.css";

export const select = recipe({
	base: [
		utilCss({
			width: "100%",
		}),
		a11yDisabled,
		a11yFocus,
		{ resize: "none" },
	],
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			lg: [
				elementFontSize.lg,
				elementPadding.lg,
				{ height: elementHeight.lg },
			],
			md: [
				elementFontSize.md,
				elementPadding.md,
				{ height: elementHeight.md },
			],
			sm: [
				elementFontSize.sm,
				elementPadding.sm,
				{ height: elementHeight.sm },
			],
		},
	},
});
