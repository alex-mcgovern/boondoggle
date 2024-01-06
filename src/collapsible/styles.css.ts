import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../index.css";

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
		"&[data-state=\"closed\"]": {
			animation: `${close} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
		},
		"&[data-state=\"open\"]": {
			animation: `${open} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
		},
	},
});
