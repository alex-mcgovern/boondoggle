import { style } from "@vanilla-extract/css";

import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const popoverTrigger = style([
  {
    color: vars.color.text_low_contrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text_high_contrast,
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  globalFocusStyles,
]);
