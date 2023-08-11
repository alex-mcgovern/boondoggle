import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dataTableCellButtonStyle = style([
  getSprinkles({
    color: "text_high_contrast",
    fontStyle: "body_sm",
    fontWeight: "medium",
  }),
  {
    display: "block",
    selectors: {
      [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
        color: vars.color.button_active,
      },
    },
    width: "10rem",
  },
]);

export const dataTableCellButtonInnerStyle = style([
  {
    maxWidth: calc.subtract("100%", vars.spacing.spacing_3),
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
]);
