import { styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { animateFadeIn, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";
const placement = styleVariants({
	"bottom-center": [
		{
			insetInlineStart: "50%",
			transform: "translateX(-50%)",
		},
	],
	"bottom-end": {
		left: "auto",
	},
	"bottom-start": [],
	"middle-start": [
		{
			insetBlock: "0% 50%",
			insetInlineStart: calc.add("100%", v.spacing.space_2),
		},
	],
	"top-center": [
		{
			insetBlockEnd: "100%",
			insetInlineStart: "50%",
			transform: "translateX(-50%)",
		},
	],
	"top-end": [{ insetBlockEnd: "100%", left: "auto" }],
	"top-start": [{ insetBlockEnd: "100%" }],
});

export type DialogPlacementEnum = keyof typeof placement;

export const getDialogStyles = recipe({
	base: [
		animateFadeIn,
		{
			maxWidth: calc.subtract("100vw", v.spacing.space_4),
			selectors: {
				"&:focus": {
					outline: "none",
				},
			},
		},
		css({
			padding: "none",
			zIndex: "1",
		}),
	],
	defaultVariants: {
		placement: "bottom-start",
	},
	variants: {
		placement,
	},
});
