import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../css-utils";
import {
	SELECTOR_IS_FOCUS,
	SELECTOR_IS_HOVER,
	a11yFocusStyleRule,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const sliderRoot = style([
	sprinkles({
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
	sprinkles({
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
	sprinkles({
		background: "button_default",
		borderRadius: "pill",
		height: "100%",
		position: "absolute",
	}),
]);

export const sliderThumb = style([
	sprinkles({
		background: "tint_2",
		border: "border_hover",
		borderRadius: "50%",

		display: "block",
		height: "space_6",
		width: "space_6",
	}),
	withPrefersMotion({
		transition: `background ${vars.transitionDuration.short} ease, border-color ${vars.transitionDuration.short} ease`,
	}),
	{
		selectors: {
			[`&${SELECTOR_IS_HOVER}`]: {
				background: vars.color.tint_4,
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
