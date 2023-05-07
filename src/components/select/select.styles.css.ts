import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  sm: [elementFontSize.sm, elementPadding.sm],
  md: [elementFontSize.md, elementPadding.md],
  lg: [elementFontSize.lg, elementPadding.lg],
});

const contentShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const dropdownListInner = style([
  {
    maxHeight: "20rem",
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
    width: "auto",
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
    maxHeight: "20rem",
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
    size,
  },
});

export const isHighlighted = style([
  variantColorOverlay.blue,
  {
    backgroundColor: vars.color.tint_active,
  },
]);

export const isSelected = style({
  fontWeight: vars.fontWeight.semibold,
});

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
