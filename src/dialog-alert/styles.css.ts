import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const dialogAlertWrapperCSS = recipe({
    base: [
        sprinkles({
            alignItems: "start",
            background: "tint_default",

            display: "flex",
            gap: "space_2",

            paddingX: "space_4",
            paddingY: "space_2",

            zIndex: "1",
        }),
    ],
    variants: {
        colorOverlay: variantColorOverlay,
    },
});

export const dialogAlertSlotCSS = style([
    sprinkles({
        color: "text_low_contrast",
        flexShrink: "0",
        width: "space_4",
    }),
]);
