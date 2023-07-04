import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const inputClearButtonStyle = style([
  a11yFocus,
  getSprinkles({
    alignItems: "center",
    aspectRatio: "square",
    color: "text_low_contrast",
    display: "flex",
    height: "spacing_3",
    justifyContent: "center",
    width: "spacing_3",
  }),
  {
    pointerEvents: "all",
    selectors: {
      [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
        color: vars.color.text_high_contrast,
      },
    },
    transition: `color ${vars.transitionDuration.short} ease`,
  },
]);
