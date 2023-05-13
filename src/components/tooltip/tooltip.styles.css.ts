import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const tooltipTrigger = style([
  getSprinkles({
    borderRadius: "sm",
    color: "text_low_contrast",
    flexShrink: "0",
    minWidth: "spacing1.5",
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
    padding: "spacing1",
    textAlign: "center",
    whiteSpace: "normal",
  }),
  {
    maxWidth: "12rem",
  },
]);
