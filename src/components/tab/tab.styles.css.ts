import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPaddingX,
  elementPaddingY,
} from "../../styles/common/element_size.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [elementFontSize.lg, elementPaddingX.lg, elementPaddingY.lg],
  md: [elementFontSize.md, elementPaddingX.md, elementPaddingY.md],
  sm: [elementFontSize.sm, elementPaddingX.sm, elementPaddingY.sm],
});

export const getTabStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      background: "tint_active",
      borderRadius: "sm",
      color: "text_low_contrast",
      display: "inline-flex",
      gap: "spacing0",
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

  defaultVariants: {
    size: "md",
  },
  variants: {
    colorOverlay: variantColorOverlay,
    size,
  },
});
