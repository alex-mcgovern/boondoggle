import { style } from "@vanilla-extract/css";
import { a11yFocus } from "../../styles/common/a11y.focus.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

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
  a11yFocus,
]);
