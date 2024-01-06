import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";

const TRANSLATE_DISTANCE = vars.spacing.space_2;
const TRANSLATE_DISTANCE_NEGATIVE = calc.multiply(TRANSLATE_DISTANCE, -1);
const DURATION = vars.transitionDuration.short;
const EASING = vars.ease.quart_in_out;

const keyframesInFromLeft = keyframes({
	"0%": {
		opacity: 0,
		transform: `translateX(${TRANSLATE_DISTANCE_NEGATIVE})`,
	},
	"100%": { opacity: 1 },
});
const keyframesOutToLeft = keyframes({
	"0%": { opacity: 1 },
	"100%": {
		opacity: 0,
		transform: `translateX(${TRANSLATE_DISTANCE_NEGATIVE})`,
	},
});
const keyframesInFromRight = keyframes({
	"0%": {
		opacity: 0,
		transform: `translateX(${TRANSLATE_DISTANCE})`,
	},
	"100%": { opacity: 1 },
});
const keyframesOutToRight = keyframes({
	"0%": { opacity: 1 },
	"100%": {
		opacity: 0,
		transform: `translateX(${TRANSLATE_DISTANCE})`,
	},
});
const keyframesInFromTop = keyframes({
	"0%": {
		opacity: 0,
		transform: `translateY(${TRANSLATE_DISTANCE_NEGATIVE})`,
	},
	"100%": { opacity: 1 },
});
const keyframesOutToTop = keyframes({
	"0%": { opacity: 1 },
	"100%": {
		opacity: 0,
		transform: `translateY(${TRANSLATE_DISTANCE_NEGATIVE})`,
	},
});
const keyframesInFromBottom = keyframes({
	"0%": {
		opacity: 0,
		transform: `translateY(${TRANSLATE_DISTANCE})`,
	},
	"100%": { opacity: 1 },
});

const keyframesOutToBottom = keyframes({
	"0%": { opacity: 1 },
	"100%": {
		opacity: 0,
		transform: `translateY(${TRANSLATE_DISTANCE})`,
	},
});

export const popoverCSS = style([
	{
		...withPrefersMotion({
			selectors: {
				"&[data-entering][data-placement='bottom']": {
					animation: `${keyframesInFromTop} ${DURATION} ${EASING} forwards`,
				},
				"&[data-entering][data-placement='left']": {
					animation: `${keyframesInFromRight} ${DURATION} ${EASING} forwards`,
				},

				"&[data-entering][data-placement='right']": {
					animation: `${keyframesInFromLeft} ${DURATION} ${EASING} forwards`,
				},
				"&[data-entering][data-placement='top']": {
					animation: `${keyframesInFromBottom} ${DURATION} ${EASING} forwards`,
				},

				"&[data-exiting][data-placement='bottom']": {
					animation: `${keyframesOutToTop} ${DURATION} ${EASING} forwards`,
				},
				"&[data-exiting][data-placement='left']": {
					animation: `${keyframesOutToRight} ${DURATION} ${EASING} forwards`,
				},

				"&[data-exiting][data-placement='right']": {
					animation: `${keyframesOutToLeft} ${DURATION} ${EASING} forwards`,
				},
				"&[data-exiting][data-placement='top']": {
					animation: `${keyframesOutToBottom} ${DURATION} ${EASING} forwards`,
				},

				"&[data-trigger=ComboBox], &[data-trigger=Select]": {
					width: "var(--trigger-width)",
				},
			},
		}),
	},
]);
