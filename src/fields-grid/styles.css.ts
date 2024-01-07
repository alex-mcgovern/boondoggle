import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const fieldsGridCSS = style([
    sprinkles({
        display: "grid",
        gap: "space_4",
        gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
        },
    }),
]);
