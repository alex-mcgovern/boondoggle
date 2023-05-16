import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../../../styles/color_palette.css";
import { a11yDisabled, a11yFocus } from "../../../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPaddingLeft,
  elementPaddingRight,
  elementPaddingY,
} from "../../../../styles/common/element_size.css";
import { vars } from "../../../../styles/theme.css";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [
    elementFontSize.lg,
    elementPaddingLeft.lg,
    elementPaddingRight.lg,
    elementPaddingY.lg,
  ],
  md: [
    elementFontSize.md,
    elementPaddingLeft.md,
    elementPaddingRight.md,
    elementPaddingY.md,
  ],
  sm: [
    elementFontSize.sm,
    elementPaddingLeft.sm,
    elementPaddingRight.sm,
    elementPaddingY.sm,
  ],
});

/**
 * Dropdown item styles
 */
export const getDropdownItemStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",

      color: "text_low_contrast",
      display: "flex",
      gap: "spacing1",

      margin: "none",
      padding: "spacing1",
      textAlign: "left",

      textDecoration: "none",
      width: "100%",
    }),
    a11yDisabled,
    a11yFocus,
    {
      selectors: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ],
  variants: {
    size,
  },
});

export const isHighlighted = style([
  variantColorOverlay.blue,
  {
    backgroundColor: vars.color.tint_active,
  },
]);

export const isSelected = style({
  color: vars.color.text_high_contrast,
});
