import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const textLinkCSS = style([
    css({
        alignItems: "center",

        color: "btn_primary_bg",
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
