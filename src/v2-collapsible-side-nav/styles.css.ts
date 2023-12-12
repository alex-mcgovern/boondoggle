import { keyframes, style } from "@vanilla-extract/css";
import { MEDIA_QUERY_MOBILE, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/**
 * Shared styles used for collapsible open/close state
 */

const open = keyframes({
	from: { width: 0 },
	to: { width: "var(--radix-collapsible-content-width)" },
});

const close = keyframes({
	from: { width: "var(--radix-collapsible-content-width)" },
	to: { width: 0 },
});

export const collapsibleNavButtonCSS = style([
	sprinkles({}),
	{
		display: "flex",
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				display: "none",
			},
		},
	},
]);
export const collapsibleNavOuterCSS = style([
	sprinkles({
		overflow: "hidden",
	}),
	{
		selectors: {
			'&[data-state="closed"]': {
				animation: `${close} ${vars.transitionDuration.short} cubic-bezier(0.76, 0, 0.24, 1) forwards`,
			},
			'&[data-state="open"]': {
				animation: `${open} ${vars.transitionDuration.short} cubic-bezier(0.76, 0, 0.24, 1) forwards`,
			},
		},
	},
]);

export const collapsibleNavInnerCSS = style([
	sprinkles({
		background: "background",
		borderRight: "border_rule",

		paddingX: "space_4",
		paddingY: "space_2",

		flexDirection: "column",
		display: "flex",

		position: "sticky",
		top: "0",
		zIndex: "1",
	}),
	{
		height: "100dvh",
		width: "15rem",
	},
]);
