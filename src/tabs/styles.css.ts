import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { Sprinkles } from "../sprinkles/index.css";

import { withPrefersMotion } from "../_css-utils";
import {
    HOVER,
    NOT_DISABLED,
    a11yDisabled,
    hideScrollbar,
    variantColorOverlay,
    vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * CONFIG / CONSTANTS
 * ------------------------------------------------------------------------------- */

const TAB_HEIGHT = vars.spacing.space_8;
const TAB_INDICATOR_HEIGHT = vars.spacing["space_0.5"];

/** -----------------------------------------------------------------------------
 * TAB LIST
 * ------------------------------------------------------------------------------- */

export const tabListOuterCSS = style([
    sprinkles({
        marginY: "space_2",
        position: "relative",
    }),
    {
        selectors: {
            "&:after": {
                borderBottom: `1px solid ${vars.color.border_rule}`,
                content: "",
                inset: 0,
                position: "absolute",
                width: "inherit",
                zIndex: -10,
            },
        },
    },
]);

export const tabListInnerCSS = recipe({
    base: [
        sprinkles({
            alignItems: "center",
            display: "flex",
            gap: "space_6",
            paddingBottom: "space_1",
        }),
        {
            overflowX: "scroll",
            overflowY: "visible",
        },
        hideScrollbar,
    ],
    defaultVariants: {
        justify: "start",
    },
    variants: {
        justify: {
            "space-evenly": {
                justifyContent: "space-evenly",
            },
            start: {
                justifyContent: "flex-start",
            },
        },
    },
});

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

export const tabOuterCSS = style([
    a11yDisabled,
    sprinkles({
        borderRadius: "md",

        color: "text_low_contrast",
        display: "inline-flex",
        flexShrink: "0",

        fontStyle: "bodyMd",
        fontWeight: "medium",

        paddingY: "space_0.25",
        placeItems: "center",
        position: "relative",

        textDecoration: "none",
        whiteSpace: "nowrap",
    }),
    withPrefersMotion({
        transitionDuration: vars.transitionDuration.short,
        transitionProperty: "color, background",
        transitionTimingFunction: vars.ease.quart_in_out,
    }),
    {
        height: TAB_HEIGHT,

        outline: "none",

        selectors: {
            "&[data-selected]": {
                color: vars.color.bg_button_primary,
            },

            [`&${NOT_DISABLED}${HOVER}`]: {
                color: vars.color.text_high_contrast,
                cursor: "pointer",
            },
            [`&[data-selected]${HOVER}`]: {
                color: vars.color.bg_button_primary,
            },
        },
    },
]);

export const tabInnerCSS = style([
    sprinkles({
        alignItems: "center",
        display: "flex",
        gap: "space_1",
    }),
]);

export const tabIndicatorCSS = style([
    sprinkles({
        background: "bg_button_primary",
        position: "absolute",
        zIndex: "-1",
    }),
    {
        height: TAB_INDICATOR_HEIGHT,

        inset: 0,
        pointerEvents: "none",

        top: calc.add("100%", TAB_INDICATOR_HEIGHT),
        userSelect: "none",
    },
]);

/** -----------------------------------------------------------------------------
 * TAB COUNT
 * ------------------------------------------------------------------------------- */

const TAB_COUNT_SIZE = "space_4" satisfies
    | Sprinkles["height"]
    | Sprinkles["maxWidth"]
    | Sprinkles["width"];

export const tabCountCSS = style([
    variantColorOverlay.blue,
    sprinkles({
        alignItems: "center",
        background: "button_tint",
        borderRadius: "pill",

        color: "text_low_contrast",
        display: "flex",
        flexGrow: "0",
        flexShrink: "0",
        fontWeight: "semibold",

        height: TAB_COUNT_SIZE,
        justifyContent: "center",

        marginX: "space_0.5",
        minWidth: TAB_COUNT_SIZE,

        paddingX: "space_1",
        paddingY: "space_0.5",
        textAlign: "center",
    }),
    {
        fontSize: "0.625rem",
        lineHeight: "0.625rem",
    },
]);
export const tabCountIconCSS = style([
    sprinkles({
        color: "inherit",
        height: TAB_COUNT_SIZE,
        padding: "space_0.5",

        width: TAB_COUNT_SIZE,
    }),
]);
