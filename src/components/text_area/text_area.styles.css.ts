import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getWrapperStyles = recipe({
  base: [
    getSprinkles({
      display: "flex",
      gap: "spacing2",
      alignItems: "start",
      width: "100%",
    }),
  ],
  variants: { size: globalVariantsUiScale },
  defaultVariants: {
    size: "md",
  },
});

export const textArea = style([
  getSprinkles({
    width: "100%",
  }),
  globalDisabledStyles,
  globalFocusStyles,
]);
