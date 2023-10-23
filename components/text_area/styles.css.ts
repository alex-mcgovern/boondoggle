import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../src/styles/common/a11y.css";
import {
	elementFontSize,
	elementHeight,
	elementPadding,
} from "../../src/styles/common/element_size.css";
import { utilCss } from "../../src/styles/utils/util_css.css";

const size = styleVariants({
	lg: [
		elementFontSize.lg,
		elementPadding.lg,
		{ minHeight: elementHeight.lg },
	],
	md: [
		elementFontSize.md,
		elementPadding.md,
		{ minHeight: elementHeight.md },
	],
	sm: [
		elementFontSize.sm,
		elementPadding.sm,
		{ minHeight: elementHeight.sm },
	],
});

export const getTextAreaStyles = recipe({
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
		size,
	},
});
