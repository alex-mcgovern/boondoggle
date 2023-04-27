import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../styles/common/a11y.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getTagStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      border: "border_active",
      borderRadius: "sm",
      background: "tint_default",
      color: "text_low_contrast",
      display: "inline-flex",
      fontStyle: "body_sm",
      gap: "spacing0",
      paddingX: "spacing1",
      paddingY: "spacing0",
      whiteSpace: "nowrap",
      textDecoration: "none",
    }),
    a11yFocus,
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color",
    }),
    {
      selectors: {
        "&:hover": {
          background: vars.color.tint_active,
          color: vars.color.text_high_contrast,
        },
      },
    },
  ],

  variants: {
    colorOverlay: variantColorOverlay,
  },
});
