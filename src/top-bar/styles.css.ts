import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const topBarStyle = style([
    style([
        css({
            alignItems: "center",
            background: "tint_default",

            borderBottom: "border_rule",
            display: "flex",

            gap: "space_4",
            height: "topBar",

            paddingX: "space_4",
            paddingY: "space_2",

            position: "sticky",
            top: "0",

            zIndex: "1",
        }),
        { scrollbarGutter: "stable" },
    ]),
]);
