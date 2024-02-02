import type { MenuItemRenderProps } from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import {
    elementPaddingRaw,
    floatingMenu,
    unobtrusiveScrollBar,
    variantColorOverlay,
    vars,
} from "../index.css";

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

export const menuCSS = style([
    css({
        outline: "none",
        overflowY: "auto",
        padding: "space_1",
    }),
    { maxHeight: "inherit" },
    unobtrusiveScrollBar,
]);

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
            gap: "space_1",
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
                gridTemplateColumns: `${vars.spacing.space_4} 1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "true",
                selectionMode: "single",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `${vars.spacing.space_4} 1fr ${vars.spacing.space_5}`,
            },
            variants: {
                hasIcon: "true",
                selectionMode: "multiple",
            },
        },
        {
            style: {
                display: "grid",
                gridTemplateColumns: `${vars.spacing.space_4} 1fr`,
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
            true: css({
                background: "tint_hover",
            }),
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
