import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { css } from "../../../src/styles/utils/util_css.css";

export const header = recipe({
	base: [
		css({
			marginY: "space_4",
			marginX: "auto",
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

export const inner = recipe({
	base: [css({ alignItems: "center", display: "flex", gap: "space_4" })],
	defaultVariants: {
		hasTabs: false,
	},
	variants: {
		hasTabs: {
			false: [
				css({
					paddingBottom: "space_4",
					borderBottom: "border_default",
				}),
			],
			true: [],
		},
	},
});

export const actions = style([css({ marginLeft: "auto" })]);
