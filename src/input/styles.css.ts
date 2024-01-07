import type { InputRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const inputCSS = recipe<ReactAriaRecipe<InputRenderProps>>({
    base: [
        css({
            color: "text_high_contrast",
            fontStyle: "bodySm",
            height: "element_sm",
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
                isFocused: true,
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
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
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
                paddingX: "space_2",
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
