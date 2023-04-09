import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dropdownListInner = style([
  getSprinkles({}),
  {
    maxHeight: "33vh",
  },
]);

export const dropdownWrapperClosed = style({
  display: "none",
});

export const dropdownListWrapper = style([
  globalFocusStyles,
  getSprinkles({
    marginTop: "spacing1",
    // width: "max-content",
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
    // minWidth: `max("100%", "max-content")`,
    // width: "100%",
    width: "max-content",
    zIndex: 999,
    position: "absolute",
    top: "100%",
    left: 0,
    maxHeight: "33vh",

    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
  createAccessibleTransition({
    transformOrigin: "top center",
    // selectors: {
    //   [`&:not(.${dropdownWrapperClosed})`]: {
    //     animation: `${scaleIn} ${vars.transitionDuration.short} ease forwards`,
    //   },
    //   [`&.${dropdownWrapperClosed}`]: {
    //     animation: `${scaleOut} ${vars.transitionDuration.short} ease forwards`,
    //   },
    // },
  }),
]);

/**
 * ------------------------------------------------------------------------------
 * Dropdown item styles
 * ------------------------------------------------------------------------------
 */

export const getDropdownItemStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",

      display: "flex",
      alignItems: "center",
      gap: "spacing1",

      color: "text_default_high_contrast",
      textDecoration: "none",
      textAlign: "left",

      margin: "none",
      padding: "spacing1",
    }),
    globalDisabledStyles,
    globalFocusStyles,
  ],
  variants: {
    size: globalVariantsUiScale,
  },
});

export const isHighlighted = style([
  {
    backgroundColor: vars.color.tint.tint_accent_active,
  },
]);

export const isSelected = style({
  fontWeight: vars.fontWeight.semibold,
  // backgroundColor: vars.color.accent.accent_tint,
});

export const resultWrapper = style([]);

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
