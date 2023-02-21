import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yDisabled } from "../../../../styles/common/a11y.disabled.css";
import { a11yFocus } from "../../../../styles/common/a11y.focus.css";
import { variantUiScale } from "../../../../styles/common/variant.ui_scale.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const getDropdownListItemStyles = recipe({
  base: [
    getSprinkles({
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      width: "100%",
      textAlign: "left",
      color: "neutral_text_highContrast",
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
    a11yFocus,
    a11yDisabled,
  ],
  variants: {
    size: variantUiScale,
  },
});

export const isHighlighted = style([
  a11yFocus,
  {
    backgroundColor: vars.color.accent_secondary_base,
  },
]);

export const isSelected = style([
  {
    fontWeight: vars.fontWeight.semibold,
    backgroundColor: vars.color.accent_secondary_selected,
  },
]);

export const resultWrapper = style([]);

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
