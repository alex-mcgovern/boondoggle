import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../theme.css";
import { createAccessibleTransition } from "../utils/create_accessible_transition";

const appearKeyframes = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const animateAppear = style([
  createAccessibleTransition({
    animation: `${appearKeyframes} ${vars.transitionDuration.medium} ease forwards`,
  }),
]);
