import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus, a11yFocusStyleRule } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

export const radioButtonListItemStyles = style([
  getSprinkles({ marginBottom: "spacing_2" }),
  {
    listStyle: "none",
  },
]);

/** ----------------------------------------------------------------------------- */

export const radioButtonInputStyles = style({
  selectors: {
    [`&:focus, &:focus-visible`]: {
      outline: "none",
    },
  },
});

/** ----------------------------------------------------------------------------- */

export const getRadioButtonCardStyles = recipe({
  base: [
    a11yFocus,
    getSprinkles({
      alignItems: "center",
      borderRadius: "sm",
      display: "flex",
      gap: "spacing_2",
      padding: "spacing_2",
      width: "100%",
    }),
    {
      selectors: {
        "&:has(input:checked)": {
          background: vars.color.tint_default,
        },
        "&:has(input:focus)": {
          ...a11yFocusStyleRule,
        },
        "&:hover": {
          background: vars.color.tint_default,
          cursor: "pointer",
        },
      },
    },
  ],
});

/** ----------------------------------------------------------------------------- */

export const radioButtonStyles = style({
  pointerEvents: "none",
});
