import { recipe } from "@vanilla-extract/recipes";
import {
	DESKTOP,
	MOBILE,
	TABLET,
	slideUp,
	fadeInBackdropKeyframes,
	motion,
	v,
} from "../../../style.css";
import { css } from "../../../src/styles/utils/util_css.css";

export const getDialogModalOuterStyle = recipe({
	base: [
		slideUp,
		css({
			background: "background",
			margin: "auto",
			padding: "none",
		}),
		{
			"@media": {
				[MOBILE]: {
					border: "none",
					borderRadius: 0,
					maxHeight: "100dvh",
					maxWidth: "100vw",
				},
				[TABLET]: {
					border: v.border.border_default,
					borderRadius: v.radius.lg,
					boxShadow: v.boxShadow.lg,
				},
				[DESKTOP]: {
					border: v.border.border_default,
					borderRadius: v.radius.lg,
					boxShadow: v.boxShadow.lg,
				},
			},
			inset: "0",
			selectors: {
				"&::backdrop": {
					background: v.color.backdrop,
					...motion({
						animation: `${fadeInBackdropKeyframes} ${v.duration.long} ease forwards`,
					}),
				},
				"&:focus": { outline: "none" },
			},
			zIndex: 99999,
		},
	],
});
