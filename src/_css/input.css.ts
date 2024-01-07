import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { ACTIVE, FOCUS, vars } from "../index.css";

export const inputBg = style([
    css({
        background: "bg_field",
    }),
    {
        selectors: {
            [`&:${ACTIVE}`]: {
                background: vars.color.bg_field_active,
            },
            [`&:${FOCUS}`]: {
                background: vars.color.bg_field_active,
            },
        },
    },
]);
