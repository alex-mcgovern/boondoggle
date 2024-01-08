import { style } from "@vanilla-extract/css";
import { variantColorOverlay, vars } from "../../index.css";
import { sprinkles } from "../../v1/sprinkles/index.css";
import { withPrefersMotion } from "../../v1/css-utils";
import {
	keyframesInFromLeft,
	keyframesOutToLeft,
	keyframesInFromRight,
	keyframesOutToRight,
	keyframesInFromBottom,
	keyframesOutToBottom,
	keyframesInFromTop,
	keyframesOutToTop,
} from "../../_css/popover.css";

const DURATION = vars.transitionDuration.short;
const EASING = vars.ease.quart_in_out;

export const tooltipCSS = style([
	variantColorOverlay.grey,
	sprinkles({
		background: "black",
		borderRadius: "md",
		color: "white",
		fontStyle: "bodySm",
		fontWeight: "normal",
		overflow: "hidden",
		padding: "space_2",
		textAlign: "center",
		whiteSpace: "normal",
		width: "max-content",
	}),
	{
		maxWidth: "12rem",
	},
	withPrefersMotion({
		selectors: {
			"&[data-placement=left]": {
				marginRight: 8,
			},
			"&[data-placement=right]": {
				marginLeft: 8,
			},
			"&[data-placement=top]": {
				marginBottom: 8,
			},
			"&[data-placement=bottom]": {
				marginTop: 8,
			},

			"&[data-entering][data-placement='right']": {
				animation: `${keyframesInFromLeft} ${DURATION} ${EASING} forwards`,
			},
			"&[data-exiting][data-placement='right']": {
				animation: `${keyframesOutToLeft} ${DURATION} ${EASING} forwards`,
			},

			"&[data-entering][data-placement='left']": {
				animation: `${keyframesInFromRight} ${DURATION} ${EASING} forwards`,
			},
			"&[data-exiting][data-placement='left']": {
				animation: `${keyframesOutToRight} ${DURATION} ${EASING} forwards`,
			},

			"&[data-entering][data-placement='top']": {
				animation: `${keyframesInFromBottom} ${DURATION} ${EASING} forwards`,
			},
			"&[data-exiting][data-placement='top']": {
				animation: `${keyframesOutToBottom} ${DURATION} ${EASING} forwards`,
			},

			"&[data-entering][data-placement='bottom']": {
				animation: `${keyframesInFromTop} ${DURATION} ${EASING} forwards`,
			},
			"&[data-exiting][data-placement='bottom']": {
				animation: `${keyframesOutToTop} ${DURATION} ${EASING} forwards`,
			},
		},
	}),
]);

export const tooltipArrowCSS = style({
	position: "absolute",
	display: "block",
	fill: vars.color.border_element_active,
	// left: "100%",
	// rotate: "90deg",

	selectors: {
		"&[data-placement=left]": { rotate: "90deg" },
		"&[data-placement=right]": {},
		"&[data-placement=top]": {},
		"&[data-placement=bottom]": {},
	},
});
