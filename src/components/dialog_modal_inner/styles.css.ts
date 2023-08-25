import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_MOBILE,
  MEDIA_QUERY_TABLET,
} from "../../styles/common/media_queries.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ---------------------------------------------
 * Dialog width variant
 * ----------------------------------------------- */

/* eslint-disable sort-keys-fix/sort-keys-fix */
const variantWidth = styleVariants({
  lg: {
    "@media": {
      [MEDIA_QUERY_TABLET]: {
        width: "40rem",
      },
      [MEDIA_QUERY_DESKTOP]: {
        width: "50rem",
      },
    },
  },
  sm: {
    "@media": {
      [MEDIA_QUERY_TABLET]: {
        width: "20rem",
      },
      [MEDIA_QUERY_DESKTOP]: {
        width: "30rem",
      },
    },
  },
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type DialogModalInnerWidth = keyof typeof variantWidth;

/** ---------------------------------------------
 * Dialog height variant
 * ----------------------------------------------- */

/* eslint-disable sort-keys-fix/sort-keys-fix */
const variantHeight = styleVariants({
  lg: {
    "@media": {
      [MEDIA_QUERY_MOBILE]: {
        height: "100dvh",
      },
      [MEDIA_QUERY_TABLET]: {
        height: "75dvh",
      },
    },
  },
  sm: {
    "@media": {
      [MEDIA_QUERY_MOBILE]: {
        height: "100dvh",
      },
      [MEDIA_QUERY_TABLET]: {
        maxHeight: "66dvh",
        minHeight: "50dvh",
      },
    },
  },
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type DialogModalInnerHeight = keyof typeof variantHeight;

/** ---------------------------------------------
 * Main dialog inner styles
 * ----------------------------------------------- */

export const getDialogModalInnerStyle = recipe({
  base: [
    getSprinkles({
      display: "flex",
      flexDirection: "column",
      maxWidth: "100vw",
      padding: "none",
      width: "100vw",
    }),
    {
      overscrollBehavior: "contain",
    },
  ],
  defaultVariants: {
    height: "lg",
    width: "sm",
  },
  variants: {
    height: variantHeight,
    width: variantWidth,
  },
});
