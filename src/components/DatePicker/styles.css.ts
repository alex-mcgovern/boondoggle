import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const datePickerRoot = style([
  getSprinkles({
    padding: "spacing_2",
    width: "max-content",
  }),
  {
    minWidth: "24rem",
  },
]);
