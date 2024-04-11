import { keyframes, style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

export const mobileMenuOverlayCSS = style([
    css({
        display: "flex",
        placeItems: "center",
    }),
    {
        inset: "0",
        minHeight: "100dvh",
        minWidth: "100vw",
        position: "fixed",
        zIndex: 10,
    },
]);

const kfMobileMenuModalIn = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
});
const kfMobileMenuModalOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
});

export const mobileMenuModalCSS = style([
    css({
        background: "background",
        boxShadow: "lg",
        width: "100vw",
    }),
    {
        border: 0,
        outline: "none",

        selectors: {
            "&[data-entering]": {
                ...withPrefersMotion({
                    animation: `${kfMobileMenuModalIn} var(--dur-medium) var(--ease-quart-in-out) forwards`,
                }),
            },
            "&[data-exiting]": {
                ...withPrefersMotion({
                    animation: `${kfMobileMenuModalOut} var(--dur-medium) var(--ease-quart-in-out) forwards`,
                }),
            },
        },
    },
]);

export const mobileMenuCSS = style([
    css({
        // stick to bottom of container
        display: "flex",

        flexDirection: "column",

        // Use flex to allow footer element to
        height: "100dvh",
        position: "relative",
    }),
    {
        outline: 0,
    },
]);

export const mobileMenuHeaderCSS = style([
    css({
        alignItems: "center",
        background: "tint_default",

        borderBottom: "border_rule",
        display: "flex",

        gap: "space_4",
        height: "topBar",

        paddingX: "space_4",
        paddingY: "space_2",

        position: "sticky",
        top: "0",
    }),
]);

export const mobileMenuTitleCSS = style([
    css({
        color: "text_high_contrast",
        fontStyle: "bodyLg",
        fontWeight: "semibold",
        marginY: "none",
    }),
]);

export const mobileMenuContentCSS = style([
    css({
        overflowY: "auto",
        paddingX: "space_4",
        paddingY: "space_4",
    }),
]);

export const mobileMenuFooterCSS = style([
    css({
        borderTop: "border_rule",
        marginTop: "auto",
        paddingX: "space_4",
        paddingY: "space_3",
    }),
]);
