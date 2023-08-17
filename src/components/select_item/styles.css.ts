import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementHeight,
  elementPadding,
} from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [elementFontSize.lg, elementPadding.lg, { height: elementHeight.lg }],
  md: [elementFontSize.md, elementPadding.md, { height: elementHeight.md }],
  sm: [elementFontSize.sm, elementPadding.sm, { height: elementHeight.sm }],
});

export const getDropdownItemStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      color: "text_high_contrast",
      display: "flex",
      fontWeight: "normal",
      gap: "space_2",
      margin: "none",
      padding: "space_2",
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
  {
    background: vars.color.tint_active,
  },
]);
