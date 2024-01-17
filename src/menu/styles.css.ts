import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { unobtrusiveScrollBar } from "../index.css";

export const menuCSS = style([
    css({
        outline: "none",
        overflowY: "auto",
        padding: "space_1",
    }),
    { maxHeight: "inherit" },
    unobtrusiveScrollBar,
]);
