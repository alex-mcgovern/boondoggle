import { keyframes, style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const contentShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const tooltipTrigger = style([
  getSprinkles({
    color: "text_low_contrast",
    borderRadius: "sm",
    flexShrink: "0",
    minWidth: "spacing1.5",
  }),
  {
    transition: `color ease`,
    transitionDuration: vars.transitionDuration.medium,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text_high_contrast,
      },
    },
  },
  a11yFocus,
]);

export const tooltipText = style([
  getSprinkles({
    fontStyle: "body_xs",
    padding: "spacing1",
    borderRadius: "sm",
    textAlign: "center",
    color: "white",
    background: "text_low_contrast",
    whiteSpace: "normal",
  }),
  {
    maxWidth: "12rem",
  },
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.medium} ease forwards`,
  }),
]);
