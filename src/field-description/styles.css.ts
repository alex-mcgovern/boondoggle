import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const descriptionCSS = style([
    sprinkles({
        color: "text_low_contrast",
        fontStyle: "bodySm",

        marginY: "space_1",
    }),
]);
