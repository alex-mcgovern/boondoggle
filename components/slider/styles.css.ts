import { style } from "@vanilla-extract/css";
import {
	SELECTOR_IS_FOCUS,
	SELECTOR_IS_HOVER,
} from "../../src/styles/common/selectors.css";
import { focusStyleRule, motion, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

export const sliderRoot = style([
	css({
		alignItems: "center",
		display: "flex",
		marginY: "space_2",
		position: "relative",
		width: "100%",
	}),
	{
		selectors: {
			"&[data-orientation='horizontal']": {
				height: v.spacing.space_6,
			},
			"&[data-orientation='vertical']": {
				flexDirection: "column",
				width: v.spacing.space_6,
			},
		},
		touchAction: "none",
		userSelect: "none",
	},
]);

export const sliderTrack = style([
	css({
		borderRadius: "sm",
		position: "relative",
	}),
	{
		background: v.color.border_default,
		flexGrow: 1,
		selectors: {
			"&[data-orientation='horizontal']": {
				height: v.spacing.space_1,
			},
			"&[data-orientation='vertical']": {
				width: v.spacing.space_1,
			},
		},
	},
]);

export const sliderRange = style([
	css({
		background: "btn_default",
		borderRadius: "pill",
		height: "100%",
		position: "absolute",
	}),
]);

export const sliderThumb = style([
	css({
		background: "tint_default",
		border: "border_hover",
		borderRadius: "50%",

		display: "block",
		height: "space_6",
		width: "space_6",
	}),
	motion({
		transition: `background ${v.duration.short} ease, border-color ${v.duration.short} ease`,
	}),
	{
		selectors: {
			[`&${SELECTOR_IS_HOVER}`]: {
				background: v.color.tint_active,
				borderColor: v.color.border_hover,
				cursor: "pointer",
			},
			[`&${SELECTOR_IS_FOCUS}`]: {
				boxShadow: v.boxShadow.md,
				outline: "none",
				...focusStyleRule,
			},
		},
	},
]);
