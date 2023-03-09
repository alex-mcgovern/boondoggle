import { style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { classnamesDisabledState } from "../../styles/common/a11y.disabled_state.css";
import { classnamesFocusedState } from "../../styles/common/a11y.focus.css";
import { variantUiScale } from "../../styles/common/variant.ui_scale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getWrapperStyles = recipe({
  base: [
    getSprinkles({
      display: "flex",
      gap: "spacing2",
      alignItems: "center",
      width: "100%",
    }),
  ],

  variants: { size: variantUiScale },

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
  classnamesDisabledState,
  classnamesFocusedState,
]);

export type InputVariants = RecipeVariants<typeof getWrapperStyles>;
