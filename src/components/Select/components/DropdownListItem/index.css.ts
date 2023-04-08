import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { globalDisabledStyles } from "../../../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const getDropdownListItemStyles = recipe({
  base: [
    globalFocusStyles,
    globalDisabledStyles,
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
    size: globalVariantsUiScale,
  },
});

export const isHighlighted = style([
  globalFocusStyles,
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
