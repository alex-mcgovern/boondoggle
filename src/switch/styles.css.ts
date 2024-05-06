import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { HOVER, a11yFocusStyleRule } from "../index.css";

const DOT_SIZE = "var(--space-4)";
const SWITCH_MARGIN = "var(--space-0/.5)";
const SWITCH_HEIGHT = calc.add(DOT_SIZE, calc.multiply(SWITCH_MARGIN, 2));
const SWITCH_WIDTH = calc.add(
    calc.multiply(DOT_SIZE, 2),
    calc.multiply(SWITCH_MARGIN, 2),
);

export const switchCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_2",

        /**
         * @note Required to prevent the hidden, absolutely
         * positioned input from upsetting the layout.
         */
        position: "relative",
    }),
    {
        selectors: {
            [`&${HOVER}`]: {
                cursor: "pointer",
            },
        },
    },
]);

export const switchLabelCSS = style([
    css({
        color: "text_high_contrast",
        fontStyle: "bodyMd",
    }),
]);

export const switchIndicatorCSS = style([
    css({
        borderRadius: "pill",
    }),
    {
        background: "var(--slate-7)",
        height: SWITCH_HEIGHT,
        width: SWITCH_WIDTH,

        ...withPrefersMotion({
            transitionDuration: "var(--dur-short)",
            transitionProperty: "background",
            transitionTimingFunction: "var(--ease-quart-in-out)",
        }),

        selectors: {
            "&::before": {
                background: "var(--slate-1)",
                borderRadius: "var(--radius-round)",

                content: "",
                display: "block",
                height: DOT_SIZE,

                margin: SWITCH_MARGIN,

                width: DOT_SIZE,

                ...withPrefersMotion({
                    transitionDuration: "var(--dur-short)",
                    transitionProperty: "transform",
                    transitionTimingFunction: "var(--ease-quart-in-out)",
                }),
            },

            // [`${switchCSS}[data-pressed] &`]: {
            // 	borderColor: "var(--slate-7)",
            // },
            // [`${switchCSS}[data-pressed] &::before`]: {
            // 	background: "var(--slate-4)",
            // },

            [`${switchCSS}[data-focused] &::before`]: {},
            [`${switchCSS}[data-focused] &`]: {
                ...a11yFocusStyleRule,
                // 	background: "var(--slate-9)",
                // 	// borderColor: "var(--blue-6)",
            },

            [`${switchCSS}[data-selected] &::before`]: {
                // background: "var(--blue-9)",
                transform: "translateX(100%)",
            },
            [`${switchCSS}[data-selected] &`]: {
                background: "var(--slate-9)",
                // borderColor: "var(--blue-6)",
            },
        },
    },
]);
