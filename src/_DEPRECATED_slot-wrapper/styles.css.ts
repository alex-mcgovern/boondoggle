import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const slotCSS = style([
    {
        pointerEvents: "none",
    },
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",
        justifyContent: "center",
        minWidth: "space_4",
    }),
]);
