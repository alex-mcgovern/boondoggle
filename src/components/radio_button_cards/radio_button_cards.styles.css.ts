import { style } from "@vanilla-extract/css";

import { a11yFocus, a11yFocusStyleRule } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

export const radioButtonListItemStyles = style([
  getSprinkles({ marginBottom: "spacing_1" }),
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

export const radioButtonLabelStyles = style([
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
    accentColor: vars.color.button_default,
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
      "&:not(:last-child)": {
        marginBottom: vars.spacing.spacing_1,
      },
    },
  },
]);

/** ----------------------------------------------------------------------------- */

export const radioButtonStyles = style({
  pointerEvents: "none",
});
