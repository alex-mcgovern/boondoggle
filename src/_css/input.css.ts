import { style } from "@vanilla-extract/css";

import { ACTIVE, FOCUS, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const inputBg = style([
    sprinkles({
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
