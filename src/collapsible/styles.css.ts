import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../index.css";

/**
 * Shared styles used for collapsible open/close state
 */

const open = keyframes({
	from: { height: 0, overflow: "hidden" },
	to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
	from: { height: "var(--radix-collapsible-content-height)" },
	to: { height: 0 },
});

export const collapsibleContentAnimation = style({
	selectors: {
		'&[data-state="closed"]': {
			overflow: "hidden",
			animation: `${close} ${vars.transitionDuration.medium} ease forwards`,
		},
		'&[data-state="open"]': {
			animation: `${open} ${vars.transitionDuration.medium} ease forwards`,
		},
	},
});
