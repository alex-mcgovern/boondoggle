import { recipe } from "@vanilla-extract/recipes";

import { css } from "../../../src/styles/utils/util_css.css";

export const getMainStyles = recipe({
	base: [
		css({
			marginX: "auto",
			marginY: "space_4",
			paddingX: "space_4",
		}),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [css({ maxWidth: "main_lg" })],
			md: [css({ maxWidth: "main_md" })],
			sm: [css({ maxWidth: "main_sm" })],
		},
	},
});
