import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { RecipeVariants } from "@vanilla-extract/recipes";

export const getWrapperStyles = recipe({
  variants: { size: globalVariantsUiScale },

  defaultVariants: {
    size: "md",
  },
});

export const input = style([
  getSprinkles({
    width: "100%",
  }),
  globalDisabledStyles,
  globalFocusStyles,
]);

export type InputVariants = RecipeVariants<typeof getWrapperStyles>;
