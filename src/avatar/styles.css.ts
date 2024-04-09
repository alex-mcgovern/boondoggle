import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";
import { vars } from "../index.css";

/**
 * Styles for the avatar component
 */
export const avatarCSS = recipe({
    base: [
        css({
            alignItems: "center",
            background: "button_tint",
            color: "bg_button_primary",
            display: "flex",
            flexShrink: "0",
            fontWeight: "semibold",
            justifyContent: "center",
            overflow: "hidden",
        }),
        {
            fontSize: `max(${vars.fontSize.bodyLg}, 100%)`,
        },
    ],
    defaultVariants: {
        variant: "circle",
    },
    variants: {
        variant: {
            circle: [css({ borderRadius: "50%" })],
            square: [css({ borderRadius: "md" })],
        },
    },
});
