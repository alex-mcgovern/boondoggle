import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../_css-utils";
import {
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_TABLET,
    variantColorOverlay,
    vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MODAL OVERLAY
 * ------------------------------------------------------------------------------- */

const kfModalOverlayIn = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
});
const kfModalOverlayOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
});

export const modalOverlayCSS = style([
    sprinkles({
        background: "backdrop",
        display: "flex",
        placeItems: "center",
    }),
    {
        inset: "0",
        minHeight: "100dvh",
        minWidth: "100vw",
        position: "fixed",
        zIndex: 10,

        ...withPrefersMotion({
            transition: `opacity ${vars.transitionDuration.short} ${vars.ease.quart_in_out}, background ${vars.transitionDuration.short} ${vars.ease.quart_in_out}`,
        }),

        selectors: {
            "&[data-entering]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                }),
            },
            "&[data-exiting]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                }),
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * MODAL
 * ------------------------------------------------------------------------------- */

const kfModalIn = keyframes({
    "0%": { opacity: 0, transform: "scale(0.99)" },
    "100%": { opacity: 1 },
});
const kfModalOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0, transform: "scale(0.99)" },
});

export const modalCSS = recipe({
    base: [
        sprinkles({
            background: "background",
            border: "border_rule",
            borderRadius: "md",
            boxShadow: "lg",
            maxWidth: "100vw",
        }),
        {
            outline: "none",

            selectors: {
                "&[data-entering]": {
                    ...withPrefersMotion({
                        animation: `${kfModalIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                    }),
                },
                "&[data-exiting]": {
                    ...withPrefersMotion({
                        animation: `${kfModalOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                    }),
                },
            },
        },
    ],
    defaultVariants: {
        width: "lg",
    },
    variants: {
        colorOverlay: variantColorOverlay,
        width: {
            lg: {
                "@media": {
                    [MEDIA_QUERY_MOBILE]: {
                        width: "100vw",
                    },
                    [MEDIA_QUERY_TABLET]: {
                        width: "50rem",
                    },
                },
            },
            sm: {
                "@media": {
                    [MEDIA_QUERY_MOBILE]: {
                        width: "100vw",
                    },
                    [MEDIA_QUERY_TABLET]: {
                        width: "30rem",
                    },
                },
            },
        },
    },
});

/** -----------------------------------------------------------------------------
 * DIALOG
 * ------------------------------------------------------------------------------- */

export const dialogCSS = style([
    sprinkles({
        // stick to bottom of container
        display: "flex",

        // Use flex to allow footer element to
        flexDirection: "column",
        position: "relative",
    }),
    {
        "@media": {
            [MEDIA_QUERY_MOBILE]: {
                height: "100vh",
                maxHeight: "100dvh",
            },
            [MEDIA_QUERY_TABLET]: {
                maxHeight: "75dvh",
            },
        },
        outline: 0,
    },
]);

export const dialogHeaderCSS = style([
    sprinkles({
        alignItems: "center",
        borderBottom: "border_rule",
        display: "flex",

        justifyContent: "space-between",

        maxWidth: "100%",
        paddingLeft: "space_4",
        paddingRight: "space_2",

        paddingY: "space_2",
        position: "sticky",

        top: "0",
    }),
]);

export const dialogTitleCSS = style([
    sprinkles({
        color: "text_high_contrast",
        fontStyle: "bodyLg",
        fontWeight: "semibold",
        marginY: "none",
    }),
]);

export const dialogContentCSS = style([
    sprinkles({
        overflowY: "auto",
        paddingX: "space_4",
        paddingY: "space_4",
    }),
]);

export const dialogFooterCSS = style([
    sprinkles({
        borderTop: "border_rule",
        marginTop: "auto",
        paddingX: "space_4",
        paddingY: "space_3",
    }),
]);
