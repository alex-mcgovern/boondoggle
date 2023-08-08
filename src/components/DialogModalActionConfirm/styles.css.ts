import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const confirmTextStyle = style([
  getSprinkles({
    display: "inline-block",
    marginBottom: "spacing_1",
  }),
  {
    userSelect: "none",
  },
]);
