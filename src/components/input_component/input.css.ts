import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { RecipeVariants } from "@vanilla-extract/recipes";

export const getWrapperStyles = recipe({
  base: [
    getSprinkles({
      display: "flex",
      gap: "spacing2",
      alignItems: "center",
      width: "100%",
    }),
  ],

  variants: { size: globalVariantsUiScale },

  defaultVariants: {
    size: "md",
  },
});

export const input = style([
  getSprinkles({
    padding: "spacing1",
    width: "100%",
  }),
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "color, background-color, border-color",
  }),
  globalDisabledStyles,
  globalFocusStyles,
]);

export type InputVariants = RecipeVariants<typeof getWrapperStyles>;
