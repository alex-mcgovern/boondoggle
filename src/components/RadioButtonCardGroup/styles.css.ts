import { recipe } from "@vanilla-extract/recipes";

/** ----------------------------------------------------------------------------- */

export const getGroupLabelStyles = recipe({
  base: [],
  variants: {
    isLabelVisible: {
      false: {
        display: "none",
      },
      true: {},
    },
  },
});
