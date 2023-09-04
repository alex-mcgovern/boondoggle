import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
    elementFontSize,
    elementHeight,
    elementPadding,
} from "../../styles/common/element_size.css";
import {
    SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
    SELECTOR_LINK_BUTTON_INPUT_HOVER,
} from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

export const variantButtonSize = styleVariants({
    lg: [elementFontSize.lg],
    md: [elementFontSize.md],
    sm: [elementFontSize.sm],
    square_md: [
        getSprinkles({
            aspectRatio: "square",
            flexShrink: "0",
            fontStyle: "body_md",
            height: "space_10",
            width: "space_10",
        }),
    ],
    square_sm: [
        getSprinkles({
            aspectRatio: "square",
            flexShrink: "0",
            fontStyle: "body_sm",
            height: "space_8",
            width: "space_8",
        }),
    ],
    square_xs: [
        getSprinkles({
            aspectRatio: "square",
            flexShrink: "0",
            fontStyle: "body_xs",
            height: "space_6",
            width: "space_6",
        }),
    ],
});

const COMMON_BUTTON_SPRINKLES: SprinklesArgs = {
    fontWeight: "normal",
    justifyContent: "center",
    whiteSpace: "nowrap",
};

const variantAppearance = styleVariants({
    ghost: [
        getSprinkles(COMMON_BUTTON_SPRINKLES),
        {
            color: vars.color.text_low_contrast,
            selectors: {
                [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
                    background: "transparent",
                },
                [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                    background: vars.color.button_tint,
                    color: vars.color.button_active,
                },
            },
        },
    ],

    link: [
        getSprinkles({
            textAlign: "left",
        }),
        {
            selectors: {
                "&[data-active='true']": {
                    color: vars.color.button_default,
                },
                [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                    color: vars.color.button_default,
                },
            },
        },
    ],

    primary: [
        getSprinkles(COMMON_BUTTON_SPRINKLES),
        {
            background: vars.color.button_default,
            color: vars.color.white,
            selectors: {
                "&[data-active='true']": {
                    background: vars.color.button_active,
                    color: vars.color.white,
                },
                [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
                    background: vars.color.button_default,
                },
                [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                    background: vars.color.button_active,
                    color: vars.color.white,
                },
            },
        },
    ],

    secondary: [
        getSprinkles(COMMON_BUTTON_SPRINKLES),
        {
            border: "1px solid",
            borderColor: vars.color.border_default,
            color: vars.color.text_high_contrast,
            selectors: {
                "&[data-active='true']": {
                    background: vars.color.button_tint,
                    color: vars.color.button_active,
                },
                [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
                    background: "transparent",
                },
                [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                    background: vars.color.tint_active,
                },
            },
        },
    ],

    tertiary: [
        getSprinkles({
            fontWeight: "normal",
            paddingX: "space_2",
            paddingY: "space_1",
            textAlign: "left",
        }),
        {
            color: vars.color.text_low_contrast,
            selectors: {
                "&[data-active='true']": {
                    background: vars.color.tint_active,
                },
                [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
                    color: vars.color.button_default,
                },
                [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
                    background: vars.color.tint_active,
                    // color: vars.color.button_active,
                    textDecoration: "none",
                },
            },
        },
    ],
});

export type Appearance = keyof typeof variantAppearance;

export const getButtonStyles = recipe({
    base: [
        a11yFocus,
        a11yDisabled,
        getSprinkles({
            alignItems: "center",
            borderRadius: "md",
            display: "inline-flex",
            gap: "space_2",
            textDecoration: "none",
        }),
        createAccessibleTransition({
            transition: `color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease, opacity ${vars.transitionDuration.short} ease`,
        }),
    ],

    compoundVariants: [
        {
            style: [elementPadding.lg, { height: elementHeight.lg }],
            variants: { appearance: "primary", size: "lg" },
        },
        {
            style: [elementPadding.md, { height: elementHeight.md }],
            variants: { appearance: "primary", size: "md" },
        },
        {
            style: [elementPadding.sm, { height: elementHeight.sm }],
            variants: { appearance: "primary", size: "sm" },
        },

        {
            style: [elementPadding.lg, { height: elementHeight.lg }],
            variants: { appearance: "secondary", size: "lg" },
        },
        {
            style: [elementPadding.md, { height: elementHeight.md }],
            variants: { appearance: "secondary", size: "md" },
        },
        {
            style: [elementPadding.sm, { height: elementHeight.sm }],
            variants: { appearance: "secondary", size: "sm" },
        },

        {
            style: [elementPadding.lg, { height: elementHeight.lg }],
            variants: { appearance: "ghost", size: "lg" },
        },
        {
            style: [elementPadding.md, { height: elementHeight.md }],
            variants: { appearance: "ghost", size: "md" },
        },
        {
            style: [elementPadding.sm, { height: elementHeight.sm }],
            variants: { appearance: "ghost", size: "sm" },
        },
    ],

    defaultVariants: {
        appearance: "primary",
        size: "md",
    },

    variants: {
        appearance: variantAppearance,
        size: variantButtonSize,
    },
});
