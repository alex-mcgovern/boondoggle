import type { PopoverRenderProps } from "react-aria-components";

import { keyframes } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { withPrefersMotion } from "../_css-utils";
import { vars } from "../index.css";

const TRANSLATE_DISTANCE = vars.spacing.space_2;
const TRANSLATE_DISTANCE_NEGATIVE = calc.multiply(TRANSLATE_DISTANCE, -1);
const DURATION = vars.transitionDuration.short;
const EASING = vars.ease.quart_in_out;

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
    base: [],
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
            bottom: {},
            center: {},
            left: {},
            right: {},
            top: {},
        },

        trigger: {
            ComboBox: {
                minWidth: calc.add(
                    "var(--trigger-width)",
                    vars.spacing.space_1,
                ),
            },
            DatePicker: {
                width: "unset",
            },
            Select: {
                minWidth: "var(--trigger-width)",
            },
        },
    },
});
