import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../theme.css";
import { createAccessibleTransition } from "../utils/create_accessible_transition";

/** ----------------------------------------------------------------------------- */

export const fadeInBackdropKeyframes = keyframes({
  "0%": { background: "transparent" },
  "100%": { background: vars.color.backdrop },
});

/** ----------------------------------------------------------------------------- */

const fadeInKeyframes = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const animateFadeIn = style([
  createAccessibleTransition({
    animation: `${fadeInKeyframes} ${vars.transitionDuration.short} ease forwards`,
  }),
]);

/** ----------------------------------------------------------------------------- */

const slideUpKeyframes = keyframes({
  "0%": { opacity: 0, transform: `translateY(${vars.spacing.space_10})` },
  "100%": { opacity: 1 },
});

export const animateSlideUp = style([
  createAccessibleTransition({
    animation: `${slideUpKeyframes} ${vars.transitionDuration.medium} ease forwards`,
  }),
]);
