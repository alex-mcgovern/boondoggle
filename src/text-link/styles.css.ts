import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const textLinkCSS = style([
    sprinkles({
        alignItems: "center",

        color: "bg_button_primary",
        display: "flex",
        gap: "space_1",
    }),
    {
        fontSize: "inherit",
        selectors: {
            "&[data-hovered]": {
                textDecoration: "underline",
            },
        },
    },
]);
