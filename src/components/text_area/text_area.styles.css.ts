import { style } from "@vanilla-extract/css";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const textArea = style([
  getSprinkles({
    width: "100%",
  }),
  a11yDisabled,
  a11yFocus,
]);
