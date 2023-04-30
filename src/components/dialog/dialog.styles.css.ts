import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const dialogOverlay = style([
  {
    background: `#00000080`,
    position: "fixed",
    inset: 0,
    zIndex: 99999,
  },
  createAccessibleTransition({
    animation: `${overlayShow} ${vars.transitionDuration.medium} cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  }),
]);

export const dialogContent = style([
  getSprinkles({
    display: "block",
    isolation: "isolate",
    overflow: "hidden",
    textDecoration: "none",
    background: "tint_default",
    border: "border_default",
    borderRadius: "md",
    boxShadow: "lg",
    width: {
      mobile: "gridSpan10",
      tablet: "gridSpan8",
      desktop: "gridSpan8",
    },
    maxWidth: "gridSpan10",
  }),
  {
    zIndex: 99999,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    selectors: {
      "&:focus": { outline: "none" },
    },
  },
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.long} ease forwards`,
  }),
]);

export const dialogInner = style([
  getSprinkles({
    maxHeight: "90vh",
    padding: "spacing2",
  }),
  {
    overflowY: "auto",
  },
]);
