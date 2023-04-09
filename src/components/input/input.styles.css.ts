import { style } from "@vanilla-extract/css";

import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const input = style([
  getSprinkles({
    width: "100%",
  }),
  globalDisabledStyles,
  globalFocusStyles,
]);
