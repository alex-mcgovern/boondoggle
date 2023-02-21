import { recipe } from "@vanilla-extract/recipes";
import { a11yDisabled } from "../../styles/common/a11y.disabled.css";
import { a11yFocus } from "../../styles/common/a11y.focus.css";
import { variantUiScale } from "../../styles/common/variant.ui_scale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { variantButtonColor } from "./button-color.css";
import { variantButtonAppearance } from "./variantButtonAppearance.css";

export const getButtonStyles = recipe({
  /** ---------------------------------------------—
   * BUTTON BASE STYLES
   *
   * Everything not specific to a variant is declared here.
   * We prefer using sprinkles properties here as they shouldn't
   * collide with variant styles. (As long as variant styles also use
   * sprinkles styles)
   * ----------------------------------------------- */

  base: [
    a11yFocus,
    a11yDisabled,
    getSprinkles({
      borderRadius: "md",
      display: "flex",
      gap: "spacing0",
      alignItems: "center",
      textDecoration: "none",
      // width:
      //   "max-content" /** <- Still unsure best default for this property */,
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background, border-color",
    }),
  ],
  /** ---------------------------------------------—
   * BUTTON STYLE VARIANTS
   *
   * All permutations of button styles are described by these variants.
   * Types are exported from the variants, and exposed as top-level props
   * on the Button component.
   * ----------------------------------------------- */

  variants: {
    appearance: variantButtonAppearance,
    color: variantButtonColor,
    size: variantUiScale,
  },

  defaultVariants: {
    appearance: "primary",
    size: "md",
  },
});

export const iconStyle = getSprinkles({
  flexShrink: "0",
  // display: "block",
  // width: "auto",
  // minWidth: "spacing2",
});
