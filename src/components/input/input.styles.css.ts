import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementHeight,
  elementPadding,
} from "../../styles/common/element_size.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [
    elementFontSize.lg,
    elementPadding.lg,
    getSprinkles({ height: elementHeight.lg }),
  ],
  md: [
    elementFontSize.md,
    elementPadding.md,
    getSprinkles({ height: elementHeight.md }),
  ],
  sm: [
    elementFontSize.sm,
    elementPadding.sm,
    getSprinkles({ height: elementHeight.sm }),
  ],
});

/** ----------------------------------------------------------------------------- */

const hasBorder = styleVariants({
  false: [{ border: "none !important", borderRadius: "0 !important" }],
  true: [],
});

export type HasBorderEnum = keyof typeof hasBorder;

/** ----------------------------------------------------------------------------- */

export const getInputStyles = recipe({
  base: [
    getSprinkles({
      width: "100%",
    }),
    a11yDisabled,
  ],
  defaultVariants: {
    hasBorder: true,
    size: "md",
  },
  variants: {
    hasBorder,
    size,
  },
});

/** ----------------------------------------------------------------------------- */

export const inputClearButtonStyle = style([
  a11yFocus,
  getSprinkles({
    alignItems: "center",
    aspectRatio: "square",
    color: "text_low_contrast",
    display: "flex",
    height: "spacing_3",
    justifyContent: "center",
    width: "spacing_3",
  }),
  {
    selectors: {
      [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
        color: vars.color.text_high_contrast,
      },
    },
    transition: `color ${vars.transitionDuration.short} ease`,
  },
]);
