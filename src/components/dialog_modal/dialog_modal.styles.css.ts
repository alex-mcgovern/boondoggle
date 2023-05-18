import { style } from "@vanilla-extract/css";

import { animateAppear } from "../../styles/common/animations.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogOverlay = style([
  {
    background: `#00000080`,
    inset: 0,
    position: "fixed",
    zIndex: 99999,
  },
  animateAppear,
]);

export const dialogContent = style([
  getSprinkles({
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
    boxShadow: "lg",
    display: "block",
    isolation: "isolate",
    maxWidth: "gridSpan10",
    overflow: "hidden",
    textDecoration: "none",
    width: {
      desktop: "gridSpan8",
      mobile: "gridSpan10",
      tablet: "gridSpan8",
    },
  }),
  {
    left: "50%",
    position: "fixed",
    selectors: {
      "&:focus": { outline: "none" },
    },
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
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
