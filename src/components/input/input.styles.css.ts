import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  sm: [elementFontSize.sm, elementPadding.sm],
  md: [elementFontSize.md, elementPadding.md],
  lg: [elementFontSize.lg, elementPadding.lg],
});

export const getInputStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",
    }),
    a11yDisabled,
  ],
  variants: {
    size,
  },
  defaultVariants: {
    size: "md",
  },
});
