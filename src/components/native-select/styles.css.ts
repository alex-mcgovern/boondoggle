import { recipe } from "@vanilla-extract/recipes";
import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
	elementFontSize,
	elementHeight,
	elementPadding,
} from "../../styles/common/element_size.css";
import { utilCss } from "../../styles/utils/util_css.css";

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
