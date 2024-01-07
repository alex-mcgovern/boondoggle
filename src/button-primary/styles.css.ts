import type { ButtonRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";

export const buttonPrimaryCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
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
