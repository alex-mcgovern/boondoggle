import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementHeight,
  elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

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
