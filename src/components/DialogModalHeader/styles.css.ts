import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogHeaderStyle = style([
  getSprinkles({
    alignItems: "center",
    borderBottom: "border_default",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    padding: "spacing_2",
  }),
]);

export const dialogTitleStyle = style([
  getSprinkles({
    fontWeight: "semibold",
    marginY: "none",
  }),
]);
