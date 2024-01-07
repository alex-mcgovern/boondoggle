import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { css } from "../css/index.css";
import { MEDIA_QUERY_MOBILE, vars } from "../index.css";

/**
 * Shared styles used for collapsible open/close state
 */

const open = keyframes({
    from: {
        overflow: "hidden",
        transform: "translateX(-100%)",
    },
    to: {},
});

const close = keyframes({
    from: {
        overflow: "hidden",
        position: "absolute",
    },
    to: {
        overflow: "hidden",
        position: "absolute",
        transform: "translateX(-100%)",
    },
});

export const collapsibleNavButtonCSS = style([
    css({}),
    {
        "@media": {
            [MEDIA_QUERY_MOBILE]: {
                display: "none",
            },
        },
        display: "flex",
    },
]);
export const collapsibleNavOuterCSS = style([
    css({
        borderRight: "border_rule",
        zIndex: "1",
    }),
    {
        selectors: {
            '&[data-state="closed"]': {
                animation: `${close} ${vars.transitionDuration.sideBarShowHide} ${vars.ease.quart_in_out} forwards`,
            },
            '&[data-state="open"]': {
                animation: `${open} ${vars.transitionDuration.sideBarShowHide} ${vars.ease.quart_in_out} forwards`,
            },
        },
    },
]);

export const collapsibleNavInnerCSS = style([
    css({
        background: "background",

        display: "flex",
        flexDirection: "column",

        paddingX: "space_4",
        paddingY: "space_2",

        position: "sticky",
        top: "0",
        zIndex: "1",
    }),
    {
        height: calc.subtract("100dvh", vars.height.topBar),
        width: vars.width.sideBar,
    },
]);
