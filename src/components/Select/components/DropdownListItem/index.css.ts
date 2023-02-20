import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { disabledStateStyles } from "../../../../styles/common/disabled_state_styles.css";
import { focusedStateStyle } from "../../../../styles/common/focus_ring_styles.css";
import { variantInteractiveElementSize } from "../../../../styles/common/variant_interactive_element_size.css";
import { createAccessibleTransition } from "../../../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../../../styles/getSprinkles.css";
import { vars } from "../../../../styles/theme.css";

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
    focusedStateStyle,
    disabledStateStyles,
  ],
  variants: {
    size: variantInteractiveElementSize,
  },
});

export const isHighlighted = style([
  focusedStateStyle,
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
