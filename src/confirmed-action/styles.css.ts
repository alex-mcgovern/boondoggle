import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const confirmTextCSS = style([
    css({
        display: "inline-block",
        fontSize: "bodyMd",
        lineHeight: "bodySm",
        marginBottom: "space_2",
    }),
    {
        userSelect: "none",
    },
]);
