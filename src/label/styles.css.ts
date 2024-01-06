import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const labelCSS = style([
    sprinkles({
        alignItems: "center",
        color: "text_high_contrast",
        display: "flex",

        fontSize: "bodyMd",
        fontWeight: "medium",
        gap: "space_1",

        marginBottom: "space_1",
    }),
]);
