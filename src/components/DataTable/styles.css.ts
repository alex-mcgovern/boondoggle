import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";

const variantHasActionsBar = styleVariants({
  false: {
    borderTopLeftRadius: vars.borderRadius.md,
    borderTopRightRadius: vars.borderRadius.md,
  },
  true: {
    borderTopLeftRadius: "0 !important",
    borderTopRightRadius: "0 !important",
  },
});

/** ----------------------------------------------------------------------------- */

const variantIsPaginated = styleVariants({
  false: {
    borderBottomLeftRadius: vars.borderRadius.md,
    borderBottomRightRadius: vars.borderRadius.md,
  },
  true: {
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
  },
});

/** ----------------------------------------------------------------------------- */

export const getDataTableStyle = recipe({
  base: {
    maxWidth: "100%",
    width: "100%",
  },
  variants: {
    hasActionsBar: variantHasActionsBar,
    isPaginated: variantIsPaginated,
  },
});
