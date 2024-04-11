import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { Css } from "../css/index.css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { hideScrollbar, variantColorOverlay } from "../index.css";

const TAB_HEIGHT = "var(--space-8)";
const TAB_INDICATOR_HEIGHT = "var(--space-0/.5)";

export const tabListOuterCSS = style([
    css({
        marginY: "space_2",
        position: "relative",
    }),
    {
        selectors: {
            "&:after": {
                borderBottom: `1px solid var(--clr-border_rule)`,
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
        css({
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

export const tabOuterCSS = style([
    css({
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
        transitionDuration: "var(--dur-short)",
        transitionProperty: "color, background",
        transitionTimingFunction: "var(--ease-quart-in-out)",
    }),
    {
        height: TAB_HEIGHT,

        outline: "none",

        selectors: {
            "&[data-selected]": {
                color: "var(--clr-bg_button_primary)",
            },

            [`&[data-hovered]`]: {
                color: "var(--clr-text_high_contrast)",
                cursor: "pointer",
            },
            [`&[data-selected][data-hovered]`]: {
                color: "var(--clr-bg_button_primary)",
            },
        },
    },
]);

export const tabInnerCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_1",
    }),
]);

export const tabIndicatorCSS = style([
    css({
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

const TAB_COUNT_SIZE = "space_4" satisfies
    | Css["height"]
    | Css["maxWidth"]
    | Css["width"];

export const tabCountCSS = style([
    variantColorOverlay.blue,
    css({
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
    css({
        color: "inherit",
        height: TAB_COUNT_SIZE,
        padding: "space_0.5",

        width: TAB_COUNT_SIZE,
    }),
]);
