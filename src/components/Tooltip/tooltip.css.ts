import { style } from "@vanilla-extract/css";
import { focusedStateStyle } from "../../styles/common/focus_ring_styles.css";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { vars } from "../../styles/theme.css";

export const popoverTrigger = style([
  {
    color: vars.color.accent_text_lowContrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.accent_text_highContrast,
      },
      "&[disabled]": {
        borderColor: "accent_border_3",
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  focusedStateStyle,
]);
