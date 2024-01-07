import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const labelCSS = style([
    css({
        alignItems: "center",
        color: "text_high_contrast",
        display: "flex",

        fontSize: "bodyMd",
        fontWeight: "medium",
        gap: "space_1",

        marginBottom: "space_1",
    }),
]);
