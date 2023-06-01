import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const slot = style(
  {
    pointerEvents: "none",
  },
  getSprinkles({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    maxHeight: "spacing_3",
    maxWidth: "spacing_3",
  })
);
