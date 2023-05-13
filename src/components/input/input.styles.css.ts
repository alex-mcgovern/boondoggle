import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [elementFontSize.lg, elementPadding.lg],
  md: [elementFontSize.md, elementPadding.md],
  sm: [elementFontSize.sm, elementPadding.sm],
});

export const getInputStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",
    }),
    a11yDisabled,
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size,
  },
});
