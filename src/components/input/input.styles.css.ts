import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocusStyleRule } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPaddingX,
  elementPaddingY,
} from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const outerSize = styleVariants({
  lg: [elementFontSize.lg, elementPaddingX.lg],
  md: [elementFontSize.md, elementPaddingX.md],
  sm: [elementFontSize.sm, elementPaddingX.sm],
});

const innerSize = styleVariants({
  lg: [elementPaddingY.lg],
  md: [elementPaddingY.md],
  sm: [elementPaddingY.sm],
});

export const getInputWrapperStyles = recipe({
  base: [
    {
      ...createAccessibleTransition({
        transition: `ease ${vars.transitionDuration.short} ease`,
        transitionProperty: "color, background-color, border-color",
      }),
      selectors: {
        "&:focus-within, &:focus-visible": {
          ...a11yFocusStyleRule,
        },
        "&:not([aria-disabled='true'])": {
          cursor: "text",
        },
        "&:not([aria-disabled='true']):hover": {
          background: vars.color.tint_default,
          borderColor: vars.color.border_active,
          cursor: "text",
        },
      },
    },
    getSprinkles({
      background: "background",
      border: "border_default",
      borderRadius: "md",
      color: "text_high_contrast",
      width: "100%",
    }),
    a11yDisabled,
  ],
  defaultVariants: {
    outerSize: "md",
  },
  variants: {
    outerSize,
  },
});

export const getInputInnerStyles = recipe({
  base: [getSprinkles({ width: "100%" })],
  defaultVariants: {
    innerSize: "md",
  },
  variants: {
    innerSize,
  },
});
