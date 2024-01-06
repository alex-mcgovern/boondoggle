import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const confirmTextCSS = style([
    sprinkles({
        display: "inline-block",
        fontSize: "bodyMd",
        lineHeight: "bodySm",
        marginBottom: "space_2",
    }),
    {
        userSelect: "none",
    },
]);
