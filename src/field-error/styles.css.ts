import { style } from "@vanilla-extract/css";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const fieldErrorCss = style([
    variantColorOverlay.red,
    sprinkles({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",

        fontStyle: "bodySm",
        gap: "space_1",

        marginY: "space_1",
    }),
]);
