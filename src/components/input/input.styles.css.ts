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

/** ----------------------------------------------------------------------------- */

const hasBorder = styleVariants({
  false: [{ border: "none !important", borderRadius: "0 !important" }],
  true: [],
});

export type HasBorderEnum = keyof typeof hasBorder;

/** ----------------------------------------------------------------------------- */

export const getInputStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",
    }),
    a11yDisabled,
  ],
  defaultVariants: {
    hasBorder: true,
    size: "md",
  },
  variants: {
    hasBorder,
    size,
  },
});
