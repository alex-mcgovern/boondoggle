import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { classnamesDisabledState } from "../../../../styles/common/a11y.disabled_state.css";
import { classnamesFocusedState } from "../../../../styles/common/a11y.focus.css";
import { variantUiScale } from "../../../../styles/common/variant.ui_scale.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const getDropdownListItemStyles = recipe({
  base: [
    classnamesFocusedState,
    classnamesDisabledState,
    getSprinkles({
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      width: "100%",
      textAlign: "left",
      color: "highContrast",
      whiteSpace: "nowrap",
      margin: "none",
      paddingX: "spacing1",
      gap: "spacing0",
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color",
    }),
    {
      selectors: {
        // "&:is(:hover, :focus)": {
        //   backgroundColor: vars.color.accent_tint,
        // },
        // "&:focus": {
        //   backgroundColor: vars.color.semantic_red_base,
        // },
      },
    },
  ],
  variants: {
    size: variantUiScale,
  },
});

export const isHighlighted = style([
  classnamesFocusedState,
  {
    backgroundColor: vars.color.accent.secondary.base,
  },
]);

export const isSelected = style([
  {
    fontWeight: vars.fontWeight.semibold,
    backgroundColor: vars.color.accent.secondary.selected,
  },
]);

export const resultWrapper = style([]);

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
