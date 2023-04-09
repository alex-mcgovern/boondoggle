import { style } from "@vanilla-extract/css";

import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const popoverTrigger = style([
  {
    color: vars.color.text.text_default_low_contrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text.text_default_high_contrast,
      },
      "&[disabled]": {
        borderColor: "accent.border.3",
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  globalFocusStyles,
]);
