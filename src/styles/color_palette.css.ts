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

import { MEDIA_QUERY_DARK } from "./common/media_queries.css";
import { themeLayer } from "./layers.css";

/** -----------------------------------------------------------------------------
 * Color theme
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 * ------------------------------------------------------------------------------- */

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

    tint_default: getFromPaletteByIndex(secondaryPalette, 2),
    tint_active: getFromPaletteByIndex(secondaryPalette, 4),

    border_default: getFromPaletteByIndex(secondaryPalette, 6),
    border_active: getFromPaletteByIndex(secondaryPalette, 7),

    button_default: getFromPaletteByIndex(primaryPalette, 8),
    button_active: getFromPaletteByIndex(primaryPalette, 10),

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
    "@layer": {
      [themeLayer]: {
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
  "@layer": {
    [themeLayer]: {
      false: {
        vars: assignVars(
          color,
          makeTheme({
            primaryPalette: blue,
            secondaryPalette: slate,
          })
        ),
      },
    },
  },
});

export const variantIntent = styleVariants({
  good: {
    "@layer": {
      [themeLayer]: {
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
          [MEDIA_QUERY_DARK]: {
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
    },
  },
  bad: {
    "@layer": {
      [themeLayer]: {
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
          [MEDIA_QUERY_DARK]: {
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
    },
  },
});

export const getTheme = recipe({
  base: [
    {
      "@layer": {
        [themeLayer]: {
          "@media": {
            [MEDIA_QUERY_DARK]: {
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
        "@layer": {
          [themeLayer]: {
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
    },
    {
      variants: {
        intent: "bad",
        darkMode: true,
      },
      style: {
        "@layer": {
          [themeLayer]: {
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
    },
  ],
});

export type ColorScheme = typeof color;
export type Intent = "good" | "bad";
