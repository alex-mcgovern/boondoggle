import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

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
]);
