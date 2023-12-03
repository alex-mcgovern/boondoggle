import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { MQ_LG, MQ_XS, MQ_SM } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

const variantWidth = styleVariants({
	lg: {
		"@media": {
			[MQ_SM]: {
				width: "40rem",
			},
			[MQ_LG]: {
				width: "50rem",
			},
		},
	},
	sm: {
		"@media": {
			[MQ_SM]: {
				width: "20rem",
			},
			[MQ_LG]: {
				width: "30rem",
			},
		},
	},
});

/* eslint-enable sort-keys-fix/sort-keys-fix */

export type DialogModalInnerWidth = keyof typeof variantWidth;

export const getDialogModalInnerStyle = recipe({
	base: [
		sprinkles({
			display: "flex",
			flexDirection: "column",
			padding: "none",
		}),
		{
			"@media": {
				[MQ_XS]: {
					height: "100dvh",
				},
				[MQ_SM]: {
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
