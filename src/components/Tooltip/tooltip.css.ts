import { style } from "@vanilla-extract/css";
import { classnamesFocusedState } from "../../styles/common/a11y.focus.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const popoverTrigger = style([
  {
    color: vars.color.accent.text.lowContrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.accent.text.highContrast,
      },
      "&[disabled]": {
        borderColor: "accent.border.3",
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  classnamesFocusedState,
]);
