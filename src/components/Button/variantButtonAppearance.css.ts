import { styleVariants } from "@vanilla-extract/css";
import { a11yFocusStyleRule } from "../../styles/common/a11y.focus.css";
import {
  SELECTOR_LINK_BUTTON_FOCUS,
  SELECTOR_LINK_BUTTON_HOVER,
  SELECTOR_LINK_BUTTON_HOVER_FOCUS,
} from "../../styles/common/common.selectors.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { varsButtonTheme } from "./button.theme.css";

export const variantButtonAppearance = styleVariants({
  primary: [
    getSprinkles({
      paddingX: "spacing2",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor_alt,
      background: varsButtonTheme.backgroundColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor_alt,
          background: varsButtonTheme.backgroundColor_hover,
          boxShadow: vars.boxShadow.lg,
        },
      },
    },
  ],

  secondary: [
    getSprinkles({
      paddingX: "spacing1",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor,
      border: "1px solid",
      borderColor: varsButtonTheme.borderColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor,
          background: varsButtonTheme.backgroundColor_tint,
        },
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.textColor,
          background: varsButtonTheme.backgroundColor_tint,
        },
      },
    },
  ],

  select: [
    getSprinkles({
      alignItems: "center",
      background: "neutral_background_base",
      border: "neutral_border_interactive",
      borderRadius: "md",
      color: "neutral_text_lowContrast",
      display: "flex",
      overflow: "hidden",
      paddingX: "spacing1",
      width: "100%",
    }),
    {
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          borderColor: vars.color.neutral_border_interactiveActive,
        },
        [SELECTOR_LINK_BUTTON_FOCUS]: { ...a11yFocusStyleRule },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      textAlign: "left",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor_hover,
          textDecoration: "underline",
        },
        [`&[data-state="active"]`]: {
          color: varsButtonTheme.textColor_hover,
          // textDecoration: "underline",
        },
      },
    },
  ],

  uiLink: {
    color: varsButtonTheme.textColor,
    textDecoration: "underline",
    textDecorationColor: "transparent",
    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER]: {
        color: varsButtonTheme.textColor_hover,
        textDecorationColor: varsButtonTheme.textColor_hover,
      },
    },
  },
});

export type VariantButtonAppearanceEnum = keyof typeof variantButtonAppearance;
