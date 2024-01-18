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

/** -----------------------------------------------------------------------------
 * FilterButtonGroup
 * ------------------------------------------------------------------------------- */

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
                border: `1px dashed ${vars.color.border_field}`,
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

/** -----------------------------------------------------------------------------
 * FilterButtonGroupLabel
 * ------------------------------------------------------------------------------- */

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
        borderBottomLeftRadius: vars.borderRadius.pill,
        borderTopLeftRadius: vars.borderRadius.pill,
    },
]);

/** -----------------------------------------------------------------------------
 * RemoveFilterButton
 * ------------------------------------------------------------------------------- */

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
            borderBottomRightRadius: vars.borderRadius.pill,
            borderTopRightRadius: vars.borderRadius.pill,
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
                background: "bg_button_secondary_active",
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
            }),
        },
    },
});

/** -----------------------------------------------------------------------------
 * FilterButton
 * ------------------------------------------------------------------------------- */

export const filterButtonCSS = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        css({
            alignItems: "center",
            color: "bg_button_primary",
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
                    borderBottomRightRadius: vars.borderRadius.pill,
                    borderTopRightRadius: vars.borderRadius.pill,
                },
                "&:last-child": {
                    borderBottomRightRadius: vars.borderRadius.pill,
                    borderTopRightRadius: vars.borderRadius.pill,
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
                background: "bg_button_secondary_active",
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
            }),
        },
    },
});
