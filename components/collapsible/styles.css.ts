import { keyframes, style } from "@vanilla-extract/css";

import { v } from "../../style.css";

/**
 * Shared styles used for collapsible open/close state
 */

const open = keyframes({
	from: { height: 0 },
	to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
	from: { height: "var(--radix-collapsible-content-height)" },
	to: { height: 0 },
});

export const collapsibleContentAnimation = style({
	overflow: "hidden",
	selectors: {
		'&[data-state="closed"]': {
			animation: `${close} ${v.duration.medium} ease forwards`,
		},
		'&[data-state="open"]': {
			animation: `${open} ${v.duration.medium} ease forwards`,
		},
	},
});
