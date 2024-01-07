import type { InputRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const inputCSS = recipe<ReactAriaRecipe<InputRenderProps>>({
    base: [
        sprinkles({
            color: "text_high_contrast",
            fontStyle: "bodySm",
            height: "element_sm",
            width: "100%",
        }),
    ],
    compoundVariants: [
        {
            style: sprinkles({ cursor: "not-allowed", opacity: "0.5" }),
            variants: {
                isDisabled: true,
                variant: "default",
            },
        },
        {
            style: sprinkles({
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
            style: sprinkles({
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
            style: sprinkles({
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
                sprinkles({
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
            default: sprinkles({
                background: "bg_field",
                border: "border_field",
                borderRadius: "md",
                outline: "none",
                paddingX: "space_2",
                transition: "short",
            }),
            unstyled: sprinkles({
                background: "transparent",
                border: "none",
                outline: "none",
            }),
        },
    },
});
