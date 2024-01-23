import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const flagStyles = style([
    css({
        aspectRatio: "square",
        borderRadius: "50%",
        boxShadow: "sm",
        flexShrink: "0",
    }),
]);
