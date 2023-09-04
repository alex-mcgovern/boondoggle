import { amber, blue, green, red, slate } from "@radix-ui/colors";
import { assignVars, createGlobalTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeLayer } from "./layers.css";
import { makeTheme } from "./utils/make_theme";

export const color = createGlobalTheme(":root, ::backdrop", {
    ...makeTheme({
        primaryPalette: blue,
        secondaryPalette: slate,
    }),
});

export const variantColorOverlay = styleVariants({
    amber: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    color,
                    makeTheme({ primaryPalette: amber, secondaryPalette: amber })
                ),
            },
        },
    },
    blue: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    color,
                    makeTheme({ primaryPalette: blue, secondaryPalette: blue })
                ),
            },
        },
    },
    default: {
        "@layer": {
            [themeLayer]: {
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
    green: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    color,
                    makeTheme({ primaryPalette: green, secondaryPalette: green })
                ),
            },
        },
    },
    grey: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    color,
                    makeTheme({ primaryPalette: slate, secondaryPalette: slate })
                ),
            },
        },
    },
    red: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(color, makeTheme({ primaryPalette: red, secondaryPalette: red })),
            },
        },
    },
});

export const getTheme = recipe({
    variants: {
        colorOverlay: variantColorOverlay,
    },
});

export type ColorOverlay = keyof typeof variantColorOverlay;
