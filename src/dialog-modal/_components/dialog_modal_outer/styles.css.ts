import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../css-utils";
import {
	MQ_LG,
	MQ_XS,
	MQ_SM,
	animateSlideUp,
	fadeInBackdropKeyframes,
	vars,
} from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const getDialogModalOuterStyle = recipe({
	base: [
		animateSlideUp,
		sprinkles({
			background: "floating_menu_background",
			margin: "auto",
			padding: "none",
		}),
		{
			"@media": {
				[MQ_XS]: {
					border: "none",
					borderRadius: 0,
					maxHeight: "100dvh",
					maxWidth: "100vw",
				},
				[MQ_SM]: {
					border: `1px solid ${vars.color.border_1}`,
					borderRadius: vars.borderRadius.lg,
					boxShadow: vars.boxShadow.lg,
				},
				[MQ_LG]: {
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
