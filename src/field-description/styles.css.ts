import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const descriptionCSS = style([
    css({
        color: "text_low_contrast",
        fontStyle: "bodySm",

        marginY: "space_1",
    }),
]);
