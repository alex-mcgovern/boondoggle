import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { vars } from "../index.css";

export const fieldsGridCSS = style([
    css({
        display: "grid",
        gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
        },
    }),
    {
        columnGap: vars.spacing.space_2,
    },
]);
