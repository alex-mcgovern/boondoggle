import type { DateInputRenderProps } from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay, vars } from "../index.css";

export const dateInputCSS = recipe<
    ReactAriaRecipe<
        DateInputRenderProps & { isInvalid: boolean } // Bug in react-aria-components, this type is missing — https://github.com/adobe/react-spectrum/issues/5662
    >
>({
    base: [
        css({
            alignItems: "center",
            color: "text_high_contrast",
            display: "flex",
            fontStyle: "bodySm",
            height: "element_sm",
            paddingX: "space_2",
            width: "100%",
        }),
    ],
    compoundVariants: [
        {
            style: css({ cursor: "not-allowed", opacity: "0.5" }),
            variants: {
                isDisabled: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
            variants: {
                isFocusWithin: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
            variants: {
                isFocusVisible: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "border_field_active",
            }),
            variants: {
                isHovered: true,
                variant: "default",
            },
        },
        {
            style: [
                variantColorOverlay.red,
                css({
                    border: "focus",
                    outline: "focus",
                }),
            ],
            variants: {
                isInvalid: true,
                variant: "default",
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        isDisabled: {
            false: {},
            true: {},
        },

        isFocusVisible: {
            false: {},
            true: {},
        },

        isFocusWithin: {
            false: {},
            true: {},
        },

        isHovered: {
            false: {},
            true: {},
        },

        isInvalid: {
            false: {},
            true: {},
        },

        variant: {
            default: css({
                background: "bg_field",
                border: "border_field",
                borderRadius: "md",
                outline: "none",
                transition: "short",
            }),
            unstyled: css({
                background: "transparent",
                border: "none",
                outline: "none",
            }),
        },
    },
});

export const dateSegmentCSS = style([
    css({
        color: "text_high_contrast",
        paddingX: "space_0.5",
    }),
    {
        fontVariantNumeric: "tabular-nums",
        selectors: {
            "&:focus": {
                background: vars.color.button_tint,
                borderRadius: vars.borderRadius.sm,
                caretColor: "transparent",
                color: vars.color.bg_button_primary_active,
                outline: "none",
            },
            "&[data-placeholder]": {
                color: vars.color.text_low_contrast,
            },

            "&[data-type=literal]": {
                padding: 0,
            },
        },

        textAlign: "end",
    },
]);
