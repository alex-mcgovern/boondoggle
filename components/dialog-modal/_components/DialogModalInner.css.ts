import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { css } from "../../../src/styles/utils/util_css.css";
import { TABLET, DESKTOP, MOBILE } from "../../../style.css";

const variantWidth = styleVariants({
	lg: {
		"@media": {
			[TABLET]: {
				width: "40rem",
			},
			[DESKTOP]: {
				width: "50rem",
			},
		},
	},
	sm: {
		"@media": {
			[TABLET]: {
				width: "20rem",
			},
			[DESKTOP]: {
				width: "30rem",
			},
		},
	},
});

export type DialogModalInnerWidth = keyof typeof variantWidth;

export const getDialogModalInnerStyle = recipe({
	base: [
		css({
			display: "flex",
			flexDirection: "column",
			maxWidth: "100vw",
			padding: "none",
			width: "100vw",
		}),
		{
			"@media": {
				[MOBILE]: {
					height: "100dvh",
				},
				[TABLET]: {
					maxHeight: "75dvh",
				},
			},
			overscrollBehavior: "contain",
		},
	],
	defaultVariants: {
		width: "sm",
	},
	variants: {
		width: variantWidth,
	},
});
