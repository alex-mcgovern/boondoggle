import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../../../styles/color_palette.css";
import { a11yDisabled, a11yFocus } from "../../../../styles/common/a11y.css";
import {
  elementFontSize,
  elementHeight,
  elementPadding,
} from "../../../../styles/common/element_size.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [
    elementFontSize.lg,
    elementPadding.lg,
    getSprinkles({ height: elementHeight.lg }),
  ],
  md: [
    elementFontSize.md,
    elementPadding.md,
    getSprinkles({ height: elementHeight.md }),
  ],
  sm: [
    elementFontSize.sm,
    elementPadding.sm,
    getSprinkles({ height: elementHeight.sm }),
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
      gap: "spacing_1",

      margin: "none",
      padding: "spacing_1",
      textAlign: "left",

      textDecoration: "none",
      width: "100%",
    }),
    a11yDisabled,
    a11yFocus,
    createAccessibleTransition({
      transition: `background ${vars.transitionDuration.short} ease`,
    }),
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
    background: vars.color.tint_active,
  },
]);

export const isSelected = style([
  variantColorOverlay.blue,
  {
    // background: vars.color.tint_active,
    // fontWeight: vars.fontWeight.semibold,
  },
]);
