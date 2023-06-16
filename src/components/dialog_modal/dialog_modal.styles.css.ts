import { style } from "@vanilla-extract/css";

import { animateAppear } from "../../styles/common/animations.css";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_MOBILE,
  MEDIA_QUERY_TABLET,
} from "../../styles/common/media_queries.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogOverlayStyle = style([
  {
    background: `#00000080`,
    inset: 0,
    position: "fixed",
    zIndex: 99999,
  },
  animateAppear,
]);

/** ----------------------------------------------------------------------------- */

export const dialogContentStyle = style([
  getSprinkles({
    background: "tint_default",
    display: "flex",
    flexDirection: "column",
    isolation: "isolate",
    overflow: "hidden",
    textDecoration: "none",
  }),
  {
    "@media": {
      [MEDIA_QUERY_DESKTOP]: {
        border: vars.border.border_default,
        borderRadius: vars.borderRadius.sm,
        boxShadow: vars.boxShadow.lg,
        height: "100dvh",
        width: "28rem",
      },
      [MEDIA_QUERY_MOBILE]: {
        height: "100dvh",
        width: "100vw",
      },
      [MEDIA_QUERY_TABLET]: {
        border: vars.border.border_default,
        borderRadius: vars.borderRadius.sm,
        boxShadow: vars.boxShadow.lg,
        maxHeight: "75dvh",
        width: "28rem",
      },
    },
    left: "50%",
    position: "fixed",
    selectors: {
      "&:focus": { outline: "none" },
    },
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
  },
  animateAppear,
]);

/** ----------------------------------------------------------------------------- */

export const dialogInnerStyle = style([
  getSprinkles({
    flexGrow: "1",
  }),
  {
    overflowY: "auto",
  },
]);

/** ----------------------------------------------------------------------------- */

export const buttonConfirmTextStyle = style([
  getSprinkles({
    display: "inline-block",
    marginBottom: "spacing_1",
  }),
  {
    userSelect: "none",
  },
]);
