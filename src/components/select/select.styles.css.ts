import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import { elementSize } from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const contentShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const dropdownListInner = style([
  {
    maxHeight: "33vh",
  },
]);

export const dropdownWrapperClosed = style({
  display: "none",
  visibility: "hidden",
});

export const dropdownListWrapper = style([
  a11yFocus,
  getSprinkles({
    background: "background",
    marginTop: "spacing1",
    minWidth: "gridSpan3",
    display: "block",
    margin: "none",

    /** Style as a card */
    borderRadius: "sm",
    overflow: "hidden",
    isolation: "isolate",
    boxShadow: "sm",
    border: "border_default",
    overflowY: "auto",
  }),
  {
    zIndex: 999,
    maxHeight: "10rem",
    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.medium} cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  }),
]);

/**
 * Dropdown item styles
 */
export const getDropdownItemStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",

      display: "flex",
      alignItems: "center",
      gap: "spacing1",

      color: "text_low_contrast",
      textDecoration: "none",
      textAlign: "left",

      margin: "none",
      padding: "spacing1",
    }),
    a11yDisabled,
    a11yFocus,
    {
      selectors: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ],
  variants: {
    size: elementSize,
  },
});

export const isHighlighted = style({
  backgroundColor: vars.color.tint_active,
});

export const isSelected = style({
  fontWeight: vars.fontWeight.semibold,
});

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
