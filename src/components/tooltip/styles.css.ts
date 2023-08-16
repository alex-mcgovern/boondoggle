import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { animateFadeIn } from "../../styles/common/animations.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

export const tooltipTriggerStyle = style([
  getSprinkles({
    background: "transparent",
    borderRadius: "sm",
    color: "text_low_contrast",
    flexShrink: "0",
    minWidth: "spacing_1.5",
  }),
  {
    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.text_high_contrast,
      },
    },
    transition: `color ease`,
    transitionDuration: vars.transitionDuration.medium,
  },
  a11yFocus,
]);

/** ----------------------------------------------------------------------------- */

export const tooltipTextStyle = style([
  variantColorOverlay.grey,
  animateFadeIn,
  getSprinkles({
    background: "black",
    borderRadius: "md",
    color: "white",
    fontStyle: "body_sm",
    fontWeight: "normal",
    overflow: "hidden",
    padding: "spacing_1",
    textAlign: "center",
    whiteSpace: "normal",
    width: "max-content",
  }),
  {
    maxWidth: "12rem",
    zIndex: "99999",
  },
]);
