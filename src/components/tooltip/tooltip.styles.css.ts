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
    borderRadius: "sm",
    color: "text_low_contrast",
    flexShrink: "0",
    minWidth: "spacing_1.5",
  }),
  {
    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text_high_contrast,
      },
    },
    transition: `color ease`,

    transitionDuration: vars.transitionDuration.medium,
  },
  a11yFocus,
]);

export const tooltipText = style([
  getSprinkles({
    background: "text_low_contrast",
    borderRadius: "sm",
    color: "white",
    fontStyle: "body_xs",
    padding: "spacing_1",
    textAlign: "center",
    whiteSpace: "normal",
  }),
  {
    maxWidth: "12rem",
  },
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.medium} ease forwards`,
  }),
]);
