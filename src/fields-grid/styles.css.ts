import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const fieldsGridCSS = style([
    css({
        display: "grid",
        gap: "space_4",
        gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
        },
    }),
]);
