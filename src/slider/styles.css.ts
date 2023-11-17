import { style } from "@vanilla-extract/css";

import {
	SELECTOR_IS_FOCUS,
	SELECTOR_IS_HOVER,
	a11yFocusStyleRule,
	createAccessibleTransition,
	utilCss,
	vars,
} from "../index.css";

export const sliderRoot = style([
	utilCss({
		alignItems: "center",
		display: "flex",
		marginY: "space_2",
		position: "relative",
		width: "100%",
	}),
	{
		selectors: {
			"&[data-orientation='horizontal']": {
				height: vars.spacing.space_6,
			},
			"&[data-orientation='vertical']": {
				flexDirection: "column",
				width: vars.spacing.space_6,
			},
		},
		touchAction: "none",
		userSelect: "none",
	},
]);

export const sliderTrack = style([
	utilCss({
		borderRadius: "sm",
		position: "relative",
	}),
	{
		background: vars.color.border_default,
		flexGrow: 1,
		selectors: {
			"&[data-orientation='horizontal']": {
				height: vars.spacing.space_1,
			},
			"&[data-orientation='vertical']": {
				width: vars.spacing.space_1,
			},
		},
	},
]);

export const sliderRange = style([
	utilCss({
		background: "button_default",
		borderRadius: "pill",
		height: "100%",
		position: "absolute",
	}),
]);

export const sliderThumb = style([
	utilCss({
		background: "tint_default",
		border: "border_hover",
		borderRadius: "50%",

		display: "block",
		height: "space_6",
		width: "space_6",
	}),
	createAccessibleTransition({
		transition: `background ${vars.transitionDuration.short} ease, border-color ${vars.transitionDuration.short} ease`,
	}),
	{
		selectors: {
			[`&${SELECTOR_IS_HOVER}`]: {
				background: vars.color.tint_active,
				borderColor: vars.color.border_hover,
				cursor: "pointer",
			},
			[`&${SELECTOR_IS_FOCUS}`]: {
				boxShadow: vars.boxShadow.md,
				outline: "none",
				...a11yFocusStyleRule,
			},
		},
	},
]);
