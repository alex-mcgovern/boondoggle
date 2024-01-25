import type { MenuItemRenderProps } from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import {
    elementPaddingRaw,
    floatingMenu,
    variantColorOverlay,
    vars,
} from "../index.css";

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

export const menuSectionCSS = style([
    {
        selectors: {
            "&:not(:last-child)::after": {
                background: vars.color.border_rule,
                content: "",

                display: "block",
                height: "1px",

                marginBottom: elementPaddingRaw.sm.y,
                marginLeft: floatingMenu.item.paddingX,

                marginRight: floatingMenu.item.paddingX,
                marginTop: elementPaddingRaw.sm.y,
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * MENU ITEM CSS
 * ------------------------------------------------------------------------------- */

export const menuItemCSS = recipe<ReactAriaRecipe<MenuItemRenderProps>>({
    base: [
        css({
            alignItems: "center",
            borderRadius: "sm",
            color: "text_high_contrast",
            cursor: "pointer",
            display: "flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            fontWeight: "normal",
            gap: "space_2",
            minHeight: "space_8",
            paddingX: "space_2",
            paddingY: "space_1",
            textAlign: "left",
            textDecoration: "none",
            width: "100%",
        }),
        {
            selectors: {
                "&:first-letter": {
                    textTransform: "capitalize",
                },
            },
        },
    ],
    compoundVariants: [
        {
            style: {
                display: "grid",
                gridTemplateColumns: `${vars.spacing.space_5} 1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "true",
                selectionMode: "single",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `${vars.spacing.space_5} 1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "true",
                selectionMode: "multiple",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `${vars.spacing.space_5} 1fr`,
            },
            variants: {
                hasIcon: "true",
                selectionMode: "none",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "false",
                selectionMode: "single",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "false",
                selectionMode: "multiple",
            },
        },
    ],
    variants: {
        allowsDragging: {
            false: {},
            true: {},
        },
        colorOverlay: variantColorOverlay,
        hasIcon: {
            false: {},
            true: {},
        },
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isDragging: {
            false: {},
            true: {},
        },
        isDropTarget: {
            false: {},
            true: {},
        },
        isFocused: {
            false: {},
            true: css({
                background: "tint_hover",
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "tint_hover",
                outline: "none",
            }),
        },
        isHovered: {
            false: {},
            true: {},
        },
        isPressed: {
            false: {},
            true: {},
        },
        isSelected: {
            false: {},
            true: css({ fontWeight: "medium" }),
        },
        selectionBehavior: {
            replace: {},
            toggle: {},
        },
        selectionMode: {
            multiple: {},
            none: {},
            single: {},
        },
    },
});

export const menuItemNameCSS = style([
    css({
        color: "text_high_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

export const menuItemDescriptionCSS = style([
    css({
        color: "text_low_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = style([
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",
        fontStyle: "bodySm",

        fontWeight: "normal",
        textAlign: "left",
    }),
    {
        height: calc.subtract(
            floatingMenu.item.height,
            floatingMenu.container.padding,
        ),
        paddingLeft: floatingMenu.item.paddingX,
        paddingRight: floatingMenu.item.paddingX,
    },
]);
