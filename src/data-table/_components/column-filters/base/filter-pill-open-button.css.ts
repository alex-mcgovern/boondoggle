import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../../../../_css-utils";
import { css } from "../../../../css/index.css";
import { a11yFocus, vars } from "../../../../index.css";

const rotateOutKeyframes = keyframes({
    "0%": { transform: "rotate(45deg)" },
    "100%": { transform: "rotate(0deg)" },
});

export const openButtonCSS = style([
    a11yFocus,
    css({
        alignItems: "center",
        borderRadius: "pill",
        color: "text_low_contrast",
        display: "inline-flex",
        flexShrink: "0",
        fontStyle: "bodyMd",

        gap: "space_2",
        height: "space_8",

        justifyContent: "center",

        paddingX: "space_2",
    }),
]);

export const openIconCSS = recipe({
    base: [css({ fontStyle: "bodyLg" })],
    variants: {
        shouldAnimate: {
            false: {},
            true: withPrefersMotion({
                animation: `${rotateOutKeyframes} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
            }),
        },
    },
});
