import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../../../../_css-utils";
import { variantColorOverlay, vars } from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const pillGroupCSS = recipe({
    base: [
        sprinkles({
            alignItems: "center",
            borderRadius: "pill",
            display: "inline-flex",
            flexShrink: "0",
            height: "space_8",
            justifyContent: "center",
        }),
        withPrefersMotion({
            transition: `border-color ${vars.transitionDuration.medium} ease, background ${vars.transitionDuration.medium} ease`,
        }),
    ],

    variants: {
        colorOverlay: variantColorOverlay,
        isFiltered: {
            false: [
                {
                    background: "transparent",
                    border: `1px dashed ${vars.color.border_element}`,
                    selectors: {
                        "&:not(:has(button[disabled])):hover": {
                            background: vars.color.tint_default,
                        },
                    },
                },
            ],
            true: [
                sprinkles({
                    background: "tint_default",
                    border: "border_element_active",
                }),
                {
                    selectors: {
                        "&:not(:has(button[disabled])):hover": {
                            background: vars.color.tint_active,
                        },
                    },
                },
            ],
        },
    },
});
