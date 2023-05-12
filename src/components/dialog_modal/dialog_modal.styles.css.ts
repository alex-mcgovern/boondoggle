import { style } from "@vanilla-extract/css";

import { animateAppear } from "../../styles/common/animations.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogOverlay = style([
  {
    background: `#00000080`,
    position: "fixed",
    inset: 0,
    zIndex: 99999,
  },
  animateAppear,
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
  animateAppear,
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
