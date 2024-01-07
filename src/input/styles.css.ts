import type { InputRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const inputCSS = recipe<ReactAriaRecipe<InputRenderProps>>({
    base: [
        sprinkles({
            background: "bg_field",
            border: "border_field",
            borderRadius: "md",
            color: "text_high_contrast",
            fontStyle: "bodySm",
            height: "element_sm",
            outline: "none",
            paddingX: "space_2",
            transition: "short",
            width: "100%",
        }),
    ],
    variants: {
        isDisabled: {
            false: {},
            true: sprinkles({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: sprinkles({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusVisible: {
            false: {},
            true: sprinkles({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: sprinkles({
                background: "bg_field_active",
                border: "border_field_active",
            }),
        },
        isInvalid: {
            false: {},
            true: [
                variantColorOverlay.red,
                sprinkles({
                    border: "focus",
                    outline: "focus",
                }),
            ],
        },
    },
});
