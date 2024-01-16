import { keyframes, style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { HOVER, a11yFocus, vars } from "../index.css";

export const toastRegionCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "space_2",
    }),
    {
        bottom: vars.spacing.space_4,
        left: vars.spacing.space_4,
        outline: "none",
        position: "fixed",
        right: vars.spacing.space_4,
        zIndex: 10,
    },
]);

const kfToastIn = keyframes({
    "0%": {
        opacity: 0,
        transform: `translateY(${vars.spacing.space_4})`,
        zIndex: 1,
    },
    "100%": { opacity: 1 },
});
const kfToastOut = keyframes({
    "0%": { bottom: "100%", opacity: 1, position: "absolute" },
    "100%": {
        opacity: 0,
        transform: `translateY(${vars.spacing.space_4})`,
    },
});
const kfToastNoAnim = keyframes({
    "0%": {},
    "100%": {},
});

export const toastCSS = style([
    a11yFocus,
    css({
        alignItems: "center",
        background: "bg_toast",
        borderRadius: "md",

        boxShadow: "lg",
        color: "white",

        display: "flex",
        gap: "space_4",
        paddingLeft: "space_4",

        paddingRight: "space_2",

        paddingY: "space_2",
    }),
    {
        selectors: {
            "&[data-animation=entering]": {
                ...withPrefersMotion({
                    animation: `${kfToastIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards `,
                }),
            },
            "&[data-animation=exiting]": {
                ...withPrefersMotion({
                    animation: `${kfToastOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                }),
            },
        },
    },
]);

export const toastCloseButtonCSS = style([
    a11yFocus,
    css({
        borderRadius: "md",
        color: "toast_text",
        height: "space_8",
        marginLeft: "auto",
        width: "space_8",
    }),
    {
        ...withPrefersMotion({
            transition: `background ${vars.transitionDuration.short} ${vars.ease.quart_in_out}, color ${vars.transitionDuration.short} ${vars.ease.quart_in_out}`,
        }),
        selectors: {
            [`&${HOVER}`]: {
                background: vars.color.text_low_contrast,
            },
        },
    },
]);

export const toastTitleCSS = style([
    css({
        color: "toast_text",
        fontStyle: "bodyMd",
        fontWeight: "semibold",
    }),
]);

export const toastDescriptionCSS = style([
    css({
        color: "toast_text",
        fontStyle: "bodyMd",
    }),
]);
