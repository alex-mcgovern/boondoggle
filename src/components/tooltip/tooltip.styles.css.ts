import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const tooltipTrigger = style([
  {
    color: vars.color.text_low_contrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.medium,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text_high_contrast,
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  a11yFocus,
]);

export const tooltipText = style([
  getSprinkles({
    fontStyle: "body_xs",
    padding: "spacing1",
    borderRadius: "sm",
  }),
  { background: vars.color.text_low_contrast, color: vars.color.white },
]);
