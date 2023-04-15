import {
  blue,
  blueDark,
  green,
  greenDark,
  red,
  redDark,
  slate,
  slateDark,
} from "@radix-ui/colors";
import {
  assignVars,
  createGlobalTheme,
  styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsBorderRadius } from "./vars/vars_border_radius.css";
import { varsShadow } from "./vars/vars_box_shadow.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsHeight } from "./vars/vars_height.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsTransitionTime } from "./vars/vars_transition.css";
import { varsWidth } from "./vars/vars_width.css";

/**
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
const root = createGlobalTheme(":root", {
  aspectRatio: varsAspectRatio,
  borderRadius: varsBorderRadius,
  boxShadow: varsShadow,

  fontFamily: {
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    display: `"DM Sans", sans-serif;`,
  },
  fontSize: varsFontSize,
  fontWeight: varsFontWeight,
  gridTemplateColumns: varsGridTemplateColumns,
  lineHeight: varsLineHeight,
  height: varsHeight,
  spacing: varsSpacing,
  transitionDuration: varsTransitionTime,
  width: varsWidth,
});

/**
 * Color theme
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
type PaletteKey = `${string}${number}`;
type PaletteShape = Record<PaletteKey, string>;

const getFromPaletteByIndex = (
  palette: Record<PaletteKey, string>,
  index: number
) => {
  return palette[Object.keys(palette)[index] as PaletteKey];
};

interface MakeThemeArgs {
  primaryPalette: PaletteShape;
  secondaryPalette: PaletteShape;
}

const makeTheme = ({ primaryPalette, secondaryPalette }: MakeThemeArgs) => {
  return {
    white: slate.slate1,
    black: slate.slate12,

    background: getFromPaletteByIndex(secondaryPalette, 0),

    border_default: getFromPaletteByIndex(secondaryPalette, 6),
    border_active: getFromPaletteByIndex(secondaryPalette, 7),

    focus_ring: getFromPaletteByIndex(primaryPalette, 8),

    button_default: getFromPaletteByIndex(primaryPalette, 8),
    button_active: getFromPaletteByIndex(primaryPalette, 10),

    tint_default: getFromPaletteByIndex(secondaryPalette, 2),
    tint_active: getFromPaletteByIndex(secondaryPalette, 4),

    text_high_contrast: getFromPaletteByIndex(secondaryPalette, 11),
    text_low_contrast: getFromPaletteByIndex(secondaryPalette, 10),
  };
};

export const color = createGlobalTheme(":root", {
  ...makeTheme({
    primaryPalette: blue,
    secondaryPalette: slate,
  }),
});

export const variantDarkMode = styleVariants({
  true: {
    vars: assignVars(
      color,
      makeTheme({
        primaryPalette: blueDark,
        secondaryPalette: slateDark,
      })
    ),
  },
  false: {
    vars: assignVars(
      color,
      makeTheme({
        primaryPalette: blue,
        secondaryPalette: slate,
      })
    ),
  },
});

export const variantIntent = styleVariants({
  good: {
    vars: assignVars(
      color,
      makeTheme({ primaryPalette: green, secondaryPalette: green })
    ),
    selectors: {
      [`${variantDarkMode.true} &`]: {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: greenDark,
            secondaryPalette: greenDark,
          })
        ),
      },
    },
    "@media": {
      "(prefers-color-scheme: dark)": {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: greenDark,
            secondaryPalette: greenDark,
          })
        ),
      },
    },
  },
  bad: {
    vars: assignVars(
      color,
      makeTheme({ primaryPalette: red, secondaryPalette: red })
    ),
    selectors: {
      [`${variantDarkMode.true} &`]: {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: redDark,
            secondaryPalette: redDark,
          })
        ),
      },
    },
    "@media": {
      "(prefers-color-scheme: dark)": {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: redDark,
            secondaryPalette: redDark,
          })
        ),
      },
    },
  },
});

export const getTheme = recipe({
  base: [
    // color,
    {
      "@media": {
        "(prefers-color-scheme: dark)": {
          vars: assignVars(
            color,
            makeTheme({
              primaryPalette: blueDark,
              secondaryPalette: slateDark,
            })
          ),
        },
      },
    },
  ],
  variants: {
    darkMode: variantDarkMode,
    intent: variantIntent,
  },
  compoundVariants: [
    {
      variants: {
        intent: "good",
        darkMode: true,
      },
      style: {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: greenDark,
            secondaryPalette: greenDark,
          })
        ),
      },
    },
    {
      variants: {
        intent: "bad",
        darkMode: true,
      },
      style: {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: redDark,
            secondaryPalette: redDark,
          })
        ),
      },
    },
  ],
});

export type ColorScheme = typeof color;
export type Intent = "good" | "bad";

export const vars = { ...root, color };
