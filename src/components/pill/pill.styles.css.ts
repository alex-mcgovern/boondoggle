import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const pillSize = styleVariants({
  lg: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_sm",
    }),
  ],
  sm: [
    getSprinkles({
      fontStyle: "body_xs",
    }),
  ],
});

export type PillSizeEnum = keyof typeof pillSize;

export const getPillStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      background: "tint_default",
      border: "border_active",
      borderRadius: "pill",
      color: "text_low_contrast",
      flexShrink: "0",
      fontWeight: "semibold",
      paddingLeft: "spacing_0.5",
      paddingRight: "spacing_1",
      paddingY: "spacing_0.25",
      textDecoration: "none",
      whiteSpace: "nowrap",
      width: "max-content",
    }),
    a11yFocus,
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short} ease`,
      transitionProperty: "color, background-color, border-color",
    }),
    {
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
          background: vars.color.tint_active,
          color: vars.color.text_high_contrast,
        },
      },
    },
  ],

  variants: {
    colorOverlay: variantColorOverlay,
    size: pillSize,
  },
});
