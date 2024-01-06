import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withPrefersMotion } from "../../../../_css-utils";
import {
    SELECTOR_LINK_BUTTON_INPUT_HOVER,
    a11yFocus,
    vars,
} from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const closeButtonCSS = style([
    a11yFocus,
    sprinkles({
        alignItems: "center",
        aspectRatio: "square",

        borderRadius: "pill",
        color: "text_low_contrast",
        display: "flex",

        flexShrink: "0",
        fontStyle: "bodyMd",

        justifyContent: "center",
        paddingX: "space_2",

        paddingY: "space_1",
    }),
    {
        marginRight: calc.multiply(vars.spacing.space_2, -1),
        selectors: {
            [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                color: vars.color.text_high_contrast,
            },
        },
        ...withPrefersMotion({
            transition: `color ${vars.transitionDuration.medium} ease`,
        }),
    },
]);

const rotateInKeyframes = keyframes({
    "0%": {},
    "100%": { transform: "rotate(45deg)" },
});

export const closeIconCSS = style([
    sprinkles({ fontStyle: "bodyLg", height: "space_4", width: "space_4" }),
    {
        ...withPrefersMotion({
            animation: `${rotateInKeyframes} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
        }),
    },
]);
