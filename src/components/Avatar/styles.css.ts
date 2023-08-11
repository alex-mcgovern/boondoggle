import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const avatarStyle = style([
  getSprinkles({
    alignItems: "center",
    background: "button_active",
    border: "border_default",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
    overflow: "hidden",
  }),
  {
    fontSize: "100%",
  },
]);
