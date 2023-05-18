import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const slot = style([
  getSprinkles({
    alignItems: "center",
    bottom: "0",
    color: "inherit",
    display: "flex",
    flexShrink: "0",
    height: "100%",
    justifyContent: "center",

    position: "absolute",
    top: "0",
    width: "spacing4",
  }),
  { pointerEvents: "none" },
]);

export const offsetSlotRight = style({
  paddingRight: `${vars.spacing.spacing4} !important`,
});

export const offsetSlotLeft = style({
  paddingLeft: `${vars.spacing.spacing4} !important`,
});
