import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	elementFontSize,
	elementHeight,
	elementPadding,
} from "../../src/styles/common/element_size.css";
import { css } from "../../src/styles/utils/util_css.css";
import { disabled, focus } from "../../style.css";
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
		css({
			width: "100%",
		}),
		disabled,
		focus,
		{ resize: "none" },
	],
	defaultVariants: {
		size: "md",
	},
	variants: {
		size,
	},
});
