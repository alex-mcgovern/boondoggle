import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../../../styles/color_palette.css";
import { a11yDisabled, a11yFocus } from "../../../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../../../styles/common/element_size.css";
import { vars } from "../../../../styles/theme.css";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  sm: [elementFontSize.sm, elementPadding.sm],
  md: [elementFontSize.md, elementPadding.md],
  lg: [elementFontSize.lg, elementPadding.lg],
});

/**
 * Dropdown item styles
 */
export const getDropdownItemStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",

      display: "flex",
      alignItems: "center",
      gap: "spacing1",

      color: "text_low_contrast",
      textDecoration: "none",
      textAlign: "left",

      margin: "none",
      padding: "spacing1",
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
  fontWeight: vars.fontWeight.semibold,
});
