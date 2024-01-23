import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const headerCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_2",

        height: "space_8",

        marginBottom: "space_2",
    }),
]);

export const actionsCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_2",

        marginLeft: "auto",
    }),
]);
