import type {
    ButtonRenderProps,
    GroupRenderProps,
    LinkRenderProps,
} from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay, vars } from "../index.css";

export const filterButtonGroupCSS = recipe<ReactAriaRecipe<GroupRenderProps>>({
    base: [
        css({
            alignItems: "stretch",
            borderRadius: "pill",
            display: "inline-flex",
            height: "space_8",
        }),
        {
            gap: 1,
            padding: 1,
        },
    ],
    defaultVariants: {
        isFilterApplied: "false",
    },
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFilterApplied: {
            false: {
                background: "transparent",
                border: `1px dashed var(--slate-6)`,
            },
            true: [css({ border: "border_field" })],
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
            true: css({
                background: "bg_field_active",
            }),
        },
        isInvalid: {
            false: {},
            true: [
                variantColorOverlay.red,
                css({
                    outline: "focus",
                }),
            ],
        },
    },
});

export const filterButtonGroupLabelCSS = style([
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "inline-flex",
        fontStyle: "bodySm",
        gap: "space_1",
        paddingX: "space_2",
    }),
    {
        borderBottomLeftRadius: "var(--radius-pill)",
        borderTopLeftRadius: "var(--radius-pill)",
    },
]);

export const removeFilterButtonCSS = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        css({
            color: "text_low_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            fontWeight: "medium",
            gap: "space_2",
            outline: "none",
            paddingX: "space_2",
            placeItems: "center",
            whiteSpace: "nowrap",
        }),
        {
            borderBottomRightRadius: "var(--radius-pill)",
            borderTopRightRadius: "var(--radius-pill)",
        },
    ],
    variants: {
        isDisabled: {
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
            }),
        },
    },
});

export const filterButtonCSS = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        css({
            alignItems: "center",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            gap: "space_2",
            outline: "none",
            paddingX: "space_2",
            textDecoration: "none",
            whiteSpace: "nowrap",
        }),
        {
            selectors: {
                "&:first-child": {
                    borderBottomLeftRadius: "var(--radius-pill)",
                    borderTopLeftRadius: "var(--radius-pill)",
                },
                "&:last-child": {
                    borderBottomRightRadius: "var(--radius-pill)",
                    borderTopRightRadius: "var(--radius-pill)",
                },
            },
        },
    ],
    variants: {
        isDisabled: {
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "btn_bg_secondary_active",
            }),
        },
    },
});
