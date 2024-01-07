import type { ButtonRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";

export const primaryButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        css({
            alignItems: "center",
            background: "bg_button_primary",
            borderRadius: "md",
            color: "white",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodyMd",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            outline: "none",
            paddingX: "space_3",
            paddingY: "space_1",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({ background: "bg_button_primary_active" }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
    },
});

export const secondaryButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        css({
            alignItems: "center",
            background: "bg_button_secondary",
            border: "border_field",
            borderRadius: "md",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodyMd",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            outline: "none",
            paddingX: "space_3",
            paddingY: "space_1",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
                outline: "focus",
            }),
        },
    },
});

export const ghostButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        css({
            alignItems: "center",
            background: "transparent",
            borderRadius: "md",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodyMd",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            outline: "none",
            paddingX: "space_3",
            paddingY: "space_1",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
            }),
        },
    },
});
