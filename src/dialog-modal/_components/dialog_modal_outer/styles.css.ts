import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../css-utils";
import {
	MEDIA_QUERY_DESKTOP,
	MEDIA_QUERY_MOBILE,
	MEDIA_QUERY_TABLET,
	animateSlideUp,
	fadeInBackdropKeyframes,
	vars,
} from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const getDialogModalOuterStyle = recipe({
	base: [
		animateSlideUp,
		sprinkles({
			background: "background_raised",
			margin: "auto",
			padding: "none",
		}),
		{
			"@media": {
				[MEDIA_QUERY_MOBILE]: {
					border: "none",
					borderRadius: 0,
					maxHeight: "100dvh",
					maxWidth: "100vw",
				},
				[MEDIA_QUERY_TABLET]: {
					border: `1px solid ${vars.color.border_1}`,
					borderRadius: vars.borderRadius.lg,
					boxShadow: vars.boxShadow.lg,
				},
				[MEDIA_QUERY_DESKTOP]: {
					border: `1px solid ${vars.color.border_1}`,
					borderRadius: vars.borderRadius.lg,
					boxShadow: vars.boxShadow.lg,
				},
			},
			inset: "0",
			selectors: {
				"&::backdrop": {
					background: vars.color.backdrop,
					...withPrefersMotion({
						animation: `${fadeInBackdropKeyframes} ${vars.transitionDuration.long} ease forwards`,
					}),
				},
				"&:focus": { outline: "none" },
			},
			zIndex: 99999,
		},
	],
});
