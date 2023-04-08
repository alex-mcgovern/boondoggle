import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

/**
 * Shared styles used for collapsible open/close state
 */

const TRANSITION_TIMING = vars.transitionDuration.short;

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
    '&[data-state="open"]': {
      animation: `${open} ${TRANSITION_TIMING} ease forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${close} ${TRANSITION_TIMING} ease forwards`,
    },
  },
});
