import type { GroupRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const groupCSS = recipe<ReactAriaRecipe<GroupRenderProps>>({
    base: [
        sprinkles({
            alignItems: "center",
            background: "bg_field",
            border: "border_field",
            borderRadius: "md",
            display: "flex",
            fontStyle: "bodySm",
            height: "space_8",
            outline: "none",
            overflow: "hidden",
            paddingX: "space_1",
            position: "relative",
            transition: "short",
            width: "100%",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: sprinkles({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocusVisible: {
            false: {},
            true: sprinkles({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusWithin: {
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
