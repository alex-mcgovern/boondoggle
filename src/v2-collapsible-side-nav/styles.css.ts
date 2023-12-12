import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
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
		borderRight: "border_rule",
	}),
	{
		selectors: {
			'&[data-state="closed"]': {
				animation: `${close} ${vars.transitionDuration.sideNav} ${vars.ease.quart_in_out} forwards`,
			},
			'&[data-state="open"]': {
				animation: `${open} ${vars.transitionDuration.sideNav} ${vars.ease.quart_in_out} forwards`,
			},
		},
	},
]);

export const collapsibleNavInnerCSS = style([
	sprinkles({
		background: "background",
		// borderRight: "border_rule",

		paddingX: "space_4",
		paddingY: "space_2",

		flexDirection: "column",
		display: "flex",

		position: "sticky",
		top: "0",
		zIndex: "1",
	}),
	{
		height: calc.subtract("100dvh", vars.height.topBar),
		width: vars.width.sideBar,
	},
]);
