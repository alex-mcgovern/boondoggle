import type { CheckboxRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay, vars } from "../index.css";

export const checkboxTickCSS = recipe({
    base: [
        {
            fill: "none",
            stroke: "var(--clr-white)",
            strokeDasharray: 22,
            strokeDashoffset: "66px",
            strokeWidth: "var(--space-1)",
        },
        css({
            height: "space_3",
            transition: "medium",
            width: "space_3",
        }),
    ],
    variants: {
        isSelected: {
            false: {},
            true: {
                strokeDashoffset: "44px",
            },
        },
    },
});

export const checkboxWrapperCSS = recipe<ReactAriaRecipe<CheckboxRenderProps>>({
    base: css({
        alignItems: "center",
        color: "text_high_contrast",
        display: "flex",
        fontStyle: "bodySm",
        gap: "space_2",
    }),
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: { false: {}, true: {} },
        isFocusVisible: {
            false: {},
            true: {},
        },
        isHovered: {
            false: {},
            true: {},
        },
        isIndeterminate: {
            false: {},
            true: {},
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isPressed: {
            false: {},
            true: {},
        },
        isReadOnly: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
        isSelected: {
            false: {},
            true: {},
        },
    },
});

export const checkboxCSS = recipe<ReactAriaRecipe<CheckboxRenderProps>>({
    base: css({
        alignItems: "center",
        border: "border_field",
        borderRadius: "sm",
        display: "flex",
        height: "space_4",
        padding: "space_0.75",
        placeItems: "center",
        transition: "short",
        width: "space_4",
    }),
    compoundVariants: [
        {
            style: css({ background: "btn_primary_bg_active" }),
            variants: {
                isHovered: true,
                isSelected: true,
            },
        },
        {
            style: css({ background: "btn_bg_secondary_active" }),
            variants: {
                isHovered: true,
                isSelected: false,
            },
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: { false: {}, true: {} },
        isFocusVisible: {
            false: {},
            true: {},
        },
        isHovered: {
            false: {},
            true: {},
        },
        isIndeterminate: {
            false: {},
            true: {},
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isPressed: {
            false: {},
            true: css({ background: "btn_primary_bg" }),
        },
        isReadOnly: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
        isSelected: {
            false: css({ background: "btn_bg_secondary" }),
            true: css({ background: "btn_primary_bg", border: "focus" }),
        },
    },
});
