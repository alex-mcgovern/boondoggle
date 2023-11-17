import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	MEDIA_QUERY_TABLET,
	MEDIA_QUERY_DESKTOP,
	utilCss,
	MEDIA_QUERY_MOBILE,
} from "../../../../index.css";

const variantWidth = styleVariants({
	lg: {
		"@media": {
			[MEDIA_QUERY_TABLET]: {
				width: "40rem",
			},
			[MEDIA_QUERY_DESKTOP]: {
				width: "50rem",
			},
		},
	},
	sm: {
		"@media": {
			[MEDIA_QUERY_TABLET]: {
				width: "20rem",
			},
			[MEDIA_QUERY_DESKTOP]: {
				width: "30rem",
			},
		},
	},
});

/* eslint-enable sort-keys-fix/sort-keys-fix */

export type DialogModalInnerWidth = keyof typeof variantWidth;

export const getDialogModalInnerStyle = recipe({
	base: [
		utilCss({
			display: "flex",
			flexDirection: "column",
			maxWidth: "100vw",
			padding: "none",
			width: "100vw",
		}),
		{
			"@media": {
				[MEDIA_QUERY_MOBILE]: {
					height: "100dvh",
				},
				[MEDIA_QUERY_TABLET]: {
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
