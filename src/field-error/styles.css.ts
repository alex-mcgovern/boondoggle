import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const fieldErrorCss = style([
    variantColorOverlay.red,
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",

        fontStyle: "bodySm",
        gap: "space_1",

        marginY: "space_1",
    }),
]);
