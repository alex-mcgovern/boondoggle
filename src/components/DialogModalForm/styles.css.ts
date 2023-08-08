import { style } from "@vanilla-extract/css";

import {
  animateFadeIn,
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

/** ----------------------------------------------------------------------------- */

export const dialogModalOuterStyle = style([
  animateFadeIn,
  getSprinkles({
    background: "background",
    borderRadius: "lg",
    flexDirection: "column",
    overflow: "hidden",
    padding: "none",
    textDecoration: "none",
  }),
  {
    "@media": {
      [MEDIA_QUERY_MOBILE]: {
        border: "none",
        height: "100dvh",
        maxHeight: "100dvh",
        maxWidth: "100vw",
        width: "100vw",
      },
      [MEDIA_QUERY_TABLET]: {
        border: vars.border.border_default,
        borderRadius: vars.borderRadius.lg,
        boxShadow: vars.boxShadow.lg,
        maxHeight: "75dvh",
        minWidth: "28rem",
      },
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      [MEDIA_QUERY_DESKTOP]: {
        border: vars.border.border_default,
        borderRadius: vars.borderRadius.lg,
        boxShadow: vars.boxShadow.lg,
        minWidth: "35rem",
      },
    },

    left: "50%",
    overscrollBehavior: "contain",
    position: "fixed",
    selectors: {
      "&::backdrop": {
        background: vars.color.backdrop,
        ...createAccessibleTransition({
          animation: `${fadeInBackdropKeyframes} ${vars.transitionDuration.long} ease forwards`,
        }),
      },
      "&:focus": { outline: "none" },
      "&[open]": { display: "flex" },
    },
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
  },
]);
