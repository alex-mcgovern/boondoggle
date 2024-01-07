import type { ButtonRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { sprinkles } from "../sprinkles/index.css";

export const buttonPrimaryCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        sprinkles({
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
            true: sprinkles({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: sprinkles({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
        isFocusVisible: {
            false: {},
            true: sprinkles({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: sprinkles({ background: "bg_button_primary_active" }),
        },
        isPressed: {
            false: {},
            true: sprinkles({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
        },
    },
});
