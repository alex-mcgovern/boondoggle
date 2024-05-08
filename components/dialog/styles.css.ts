import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import {
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_TABLET,
    variantColorOverlay,
    vars,
} from "../index.css";

export const dialogCSS = css({ outline: "none" });

const kfModalOverlayIn = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
});
const kfModalOverlayOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
});

export const modalOverlayCSS = style([
    css({
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
            transition: `opacity var(--dur-short) var(--ease-quart-in-out), background var(--dur-short) var(--ease-quart-in-out)`,
        }),

        selectors: {
            "&[data-entering]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayIn} var(--dur-short) var(--ease-quart-in-out) forwards`,
                }),
            },
            "&[data-exiting]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayOut} var(--dur-short) var(--ease-quart-in-out) forwards`,
                }),
            },
        },
    },
]);

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
        css({
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
                        animation: `${kfModalIn} var(--dur-short) var(--ease-quart-in-out) forwards`,
                    }),
                },
                "&[data-exiting]": {
                    ...withPrefersMotion({
                        animation: `${kfModalOut} var(--dur-short) var(--ease-quart-in-out) forwards`,
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

export const dialogModalCSS = style([
    css({
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
    css({
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
    css({
        color: "text_high_contrast",
        fontStyle: "bodyLg",
        fontWeight: "semibold",
        marginY: "none",
    }),
]);

export const dialogContentCSS = style([
    css({
        overflowY: "auto",
        paddingX: "space_4",
        paddingY: "space_4",
    }),
]);

export const dialogFooterCSS = style([
    css({
        borderTop: "border_rule",
        marginTop: "auto",
        paddingX: "space_4",
        paddingY: "space_3",
    }),
]);
