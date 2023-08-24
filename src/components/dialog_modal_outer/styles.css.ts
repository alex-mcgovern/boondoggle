import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  animateSlideUp,
  fadeInBackdropKeyframes,
} from "../../styles/common/animations.css";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_MOBILE,
  MEDIA_QUERY_TABLET,
} from "../../styles/common/media_queries.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ---------------------------------------------
 * Dialog height variant
 * ----------------------------------------------- */

/* eslint-disable sort-keys-fix/sort-keys-fix */
const variantHeight = styleVariants({
  lg: {
    "@media": {
      [MEDIA_QUERY_MOBILE]: {
        top: 0,
      },
      [MEDIA_QUERY_TABLET]: {
        top: "12.5dvh",
      },
    },
  },
  sm: {
    "@media": {
      [MEDIA_QUERY_TABLET]: {
        top: 0,
      },
      [MEDIA_QUERY_DESKTOP]: {
        top: "25dvh",
      },
    },
  },
});
/* eslint-enable sort-keys-fix/sort-keys-fix */

export type DialogModalOuterHeight = keyof typeof variantHeight;

export const getDialogModalOuterStyle = recipe({
  base: [
    animateSlideUp,
    getSprinkles({
      background: "background",
      marginX: "auto",
      padding: "none",
    }),
    {
      "@media": {
        [MEDIA_QUERY_MOBILE]: {
          border: "none",
          borderRadius: 0,
          maxHeight: "100dvh",
          maxWidth: "100vw",
        },
        [MEDIA_QUERY_TABLET]: {
          border: vars.border.border_default,
          borderRadius: vars.borderRadius.lg,
          boxShadow: vars.boxShadow.lg,
        },
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        [MEDIA_QUERY_DESKTOP]: {
          border: vars.border.border_default,
          borderRadius: vars.borderRadius.lg,
          boxShadow: vars.boxShadow.lg,
        },
      },
      left: "0",
      right: "0",
      selectors: {
        "&::backdrop": {
          background: vars.color.backdrop,
          ...createAccessibleTransition({
            animation: `${fadeInBackdropKeyframes} ${vars.transitionDuration.long} ease forwards`,
          }),
        },
        "&:focus": { outline: "none" },
      },
      zIndex: 99999,
    },
  ],
  defaultVariants: {
    height: "lg",
  },
  variants: {
    height: variantHeight,
  },
});
