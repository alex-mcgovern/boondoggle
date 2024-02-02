import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";

export const collapsibleNavButtonCSS = css({
    marginTop: "auto",
});

export const sideNavButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        css({
            alignItems: "center",
            background: "bg_button_ghost",
            borderRadius: "md",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            justifyContent: "start",
            marginBottom: "space_1",
            minWidth: "space_8",
            outline: "none",
            padding: "space_2",
            textAlign: "left",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
            width: "100%",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "bg_button_ghost_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "bg_button_ghost_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "bg_button_ghost_active",
            }),
        },
    },
});

export const sideNavUserMenuTriggerCSS = recipe<
    ReactAriaRecipe<ButtonRenderProps>
>({
    base: [
        css({
            alignItems: "center",
            background: "bg_button_ghost",
            borderRadius: "md",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            justifyContent: "start",

            marginBottom: "space_1",
            minWidth: "space_8",
            outline: "none",

            textAlign: "left",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
            width: "100%",
        }),
    ],
    compoundVariants: [
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                isHovered: "true",
                isMenuExpanded: "true",
            },
        },
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                isMenuExpanded: "true",
                isPressed: "true",
            },
        },
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                isFocusVisible: "true",
                isMenuExpanded: "true",
            },
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
            false: {},
            true: css({
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: {},
        },
        isMenuExpanded: {
            false: css({}),
            true: css({
                padding: "space_2",
            }),
        },
        isPressed: {
            false: {},
            true: {},
        },
    },
});

export const sideNavLinkCSS = recipe<ReactAriaRecipe<LinkRenderProps>>({
    base: [
        css({
            alignItems: "center",
            background: "bg_button_ghost",
            borderRadius: "md",
            color: "text_high_contrast",
            display: "inline-flex",
            flexShrink: "0",
            fontStyle: "bodySm",
            fontWeight: "medium",
            gap: "space_2",
            height: "space_8",
            justifyContent: "start",
            marginBottom: "space_1",
            minWidth: "space_8",
            outline: "none",
            padding: "space_2",
            textAlign: "left",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    variants: {
        isCurrent: {
            false: {},
            true: css({
                background: "tint_active",
            }),
        },
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
                background: "bg_button_ghost_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "bg_button_ghost_active",
            }),
        },
        isPressed: {
            false: {},
            true: css({
                background: "bg_button_ghost_active",
            }),
        },
    },
});

export const iconCSS = style([css({ minWidth: "space_4" })]);

export const collapsibleNavOuterCSS = recipe({
    base: [
        css({
            background: "background",
            borderRight: "border_rule",
            display: "flex",
            flexDirection: "column",
            flexShrink: "0",

            height: "100dvh",
            overflowX: "hidden",
            // maxWidth: "sideBar",

            padding: "space_2",
            transition: "medium",
            zIndex: "1",
        }),
    ],
    variants: {
        isOpen: {
            false: css({
                width: "space_12",
            }),
            true: css({
                width: "sideBar",
            }),
        },
    },
});
