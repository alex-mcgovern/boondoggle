import type {
    OverlayArrowRenderProps,
    PopoverRenderProps,
} from "react-aria-components";

import { createVar, keyframes } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

const TRANSLATE_DISTANCE = "var(--space-1)";
const TRANSLATE_DISTANCE_NEGATIVE = calc.multiply(TRANSLATE_DISTANCE, -1);
const DURATION = "var(--dur-short)";
const EASING = "var(--ease-quart-in-out)";

export const overlayArrowCSS = css({ height: "space_3", width: "space_3" });

export const overlayArrowSvgCSS = recipe<
    ReactAriaRecipe<OverlayArrowRenderProps>
>({
    base: [
        css({
            display: "block",
        }),
        {
            fill: "var(--clr-background)",
            stroke: "var(--clr-border_rule)",
            strokeWidth: 1,
        },
    ],
    variants: {
        placement: {
            bottom: {
                transform: "rotate(180deg)",
            },
            center: {},
            left: {
                transform: "rotate(-90deg)",
            },
            right: {
                transform: "rotate(90deg)",
            },
            top: {},
        },
    },
});

const origin = createVar();

const keyframesInFromLeft = keyframes({
    "0%": {
        opacity: 0,
        transform: `translateX(${TRANSLATE_DISTANCE_NEGATIVE})`,
    },
    "100%": { opacity: 1 },
});

const keyframesOutToLeft = keyframes({
    "0%": { opacity: 1 },
    "100%": {
        opacity: 0,
        transform: `translateX(${TRANSLATE_DISTANCE_NEGATIVE})`,
    },
});

const keyframesInFromRight = keyframes({
    "0%": {
        opacity: 0,
        transform: `translateX(${TRANSLATE_DISTANCE})`,
    },
    "100%": { opacity: 1 },
});

const keyframesOutToRight = keyframes({
    "0%": { opacity: 1 },
    "100%": {
        opacity: 0,
        transform: `translateX(${TRANSLATE_DISTANCE})`,
    },
});

const keyframesInFromTop = keyframes({
    "0%": {
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE_NEGATIVE})`,
    },
    "100%": { opacity: 1 },
});

const keyframesOutToTop = keyframes({
    "0%": { opacity: 1 },
    "100%": {
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE_NEGATIVE})`,
    },
});

const keyframesInFromBottom = keyframes({
    "0%": {
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE})`,
    },
    "100%": { opacity: 1 },
});

const keyframesOutToBottom = keyframes({
    "0%": { opacity: 1 },
    "100%": {
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE})`,
    },
});

export const popoverCSS = recipe<ReactAriaRecipe<PopoverRenderProps>>({
    base: [
        css({
            background: "background",
            border: "border_rule",
            borderRadius: "md",
            boxShadow: "md",
        }),
    ],
    compoundVariants: [
        /**
         * @placement top
         */

        {
            style: withPrefersMotion({
                animation: `${keyframesInFromBottom} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isEntering: true,
                placement: "top",
            },
        },
        {
            style: withPrefersMotion({
                animation: `${keyframesOutToBottom} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isExiting: true,
                placement: "top",
            },
        },

        /**
         * @placement right
         */

        {
            style: withPrefersMotion({
                animation: `${keyframesInFromLeft} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isEntering: true,
                placement: "right",
            },
        },

        {
            style: withPrefersMotion({
                animation: `${keyframesOutToLeft} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isExiting: true,
                placement: "right",
            },
        },

        /**
         * @placement bottom
         */

        {
            style: withPrefersMotion({
                animation: `${keyframesInFromTop} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isEntering: true,
                placement: "bottom",
            },
        },
        {
            style: withPrefersMotion({
                animation: `${keyframesOutToTop} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isExiting: true,
                placement: "bottom",
            },
        },
        /**
         * @placement left
         */

        {
            style: withPrefersMotion({
                animation: `${keyframesInFromRight} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isEntering: true,
                placement: "left",
            },
        },
        {
            style: withPrefersMotion({
                animation: `${keyframesOutToRight} ${DURATION} ${EASING} forwards`,
            }),
            variants: {
                isExiting: true,
                placement: "left",
            },
        },
    ],

    variants: {
        isEntering: {
            false: {},
            true: {},
        },

        isExiting: {
            false: {},
            true: {},
        },

        placement: {
            bottom: {
                selectors: {
                    [`&:has(${overlayArrowSvgCSS()})`]: {
                        marginTop: "var(--space-1)",
                    },
                },

                vars: {
                    [origin]: `translateY(${calc.multiply(
                        "var(--space-2)",
                        -1,
                    )})`,
                },
            },
            center: {},
            left: {
                selectors: {
                    [`&:has(${overlayArrowSvgCSS()})`]: {
                        marginRight: "var(--space-1)",
                    },
                },

                vars: {
                    [origin]: `translateX(${calc.multiply(
                        "var(--space-2)",
                        -1,
                    )})`,
                },
            },
            right: {
                selectors: {
                    [`&:has(${overlayArrowSvgCSS()})`]: {
                        marginLeft: "var(--space-1)",
                    },
                },

                vars: { [origin]: `translateX(${"var(--space-2)"})` },
            },
            top: {
                selectors: {
                    [`&:has(${overlayArrowSvgCSS()})`]: {
                        marginBottom: "var(--space-1)",
                    },
                },

                vars: { [origin]: `translateY(${"var(--space-2)"})` },
            },
        },

        trigger: {
            ComboBox: {
                width: calc.add("var(--trigger-width)", "var(--space-1)"),
            },
            DatePicker: {
                width: "unset",
            },
            Select: {
                width: "var(--trigger-width)",
            },
        },
    },
});
