import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { variantTagState } from "./tag_state.css";

export const getTagStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      border: "neutral_nonInteractive",
      borderRadius: "pill",
      display: "flex",
      flexShrink: "0",
      fontStyle: "body_sm",
      gap: "spacing0",
      paddingX: "spacing1",
      paddingY: "spacing0",
      whiteSpace: "nowrap",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color",
    }),
  ],

  variants: {
    state: variantTagState,
  },

  defaultVariants: {
    state: "inactive",
  },
});

export const iconLeading = style({
  flexShrink: 0,
  justifySelf: "start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: vars.spacing.spacing1,
    },
  },
});
export const iconTrailing = style({
  flexShrink: 0,
  justifySelf: "end",
  selectors: {
    "&:not(:first-child)": {
      marginLeft: vars.spacing.spacing1,
    },
  },
});
