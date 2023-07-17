import { style } from "@vanilla-extract/css";

import { themeLayer } from "../layers.css";
import { vars } from "../theme.css";

import type { StyleRule } from "@vanilla-extract/css";

/** ----------------------------------------------------------------------------- */

export const a11yFocusStyleRule: StyleRule = {
  borderColor: `${vars.color.button_default} `,
  outline: `1px solid ${vars.color.focus_ring} `,
};

/** ----------------------------------------------------------------------------- */

export const a11yError = style([
  {
    "@layer": {
      [themeLayer]: {
        borderColor: vars.color.button_default,
        selectors: {
          [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
            ...a11yFocusStyleRule,
          },
        },
      },
    },
  },
]);

/** ----------------------------------------------------------------------------- */

export const a11yDisabled = style({
  "@layer": {
    [themeLayer]: {
      selectors: {
        "&[disabled], &[aria-disabled='true']": {
          opacity: 0.3,
        },
        "&[disabled]:hover, &[aria-disabled='true']:hover": {
          cursor: "not-allowed",
        },
      },
    },
  },
});

/** ----------------------------------------------------------------------------- */

export const a11yFocus = style([
  {
    "@layer": {
      [themeLayer]: {
        selectors: {
          [`&:focus:not(:focus-visible)`]: {
            outline: "none",
          },

          [`&:not(:is([disabled], [readonly])):focus-visible`]: {
            ...a11yFocusStyleRule,
          },
        },
      },
    },
  },
]);
