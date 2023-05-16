import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPaddingX,
  elementPaddingY,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [elementFontSize.lg, elementPaddingX.lg, elementPaddingY.lg],
  md: [elementFontSize.md, elementPaddingX.md, elementPaddingY.md],
  sm: [elementFontSize.sm, elementPaddingX.sm, elementPaddingY.sm],
});

export const getTextAreaStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",
    }),
    a11yDisabled,
    a11yFocus,
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size,
  },
});
