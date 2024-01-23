import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";
import { a11yFocus, animateFadeIn, floatingMenu } from "../index.css";

export const floatingPanel = recipe({
    base: [
        animateFadeIn,
        a11yFocus,
        css({
            background: "background",
            border: "border_rule",
            boxShadow: "md",
        }),
        {
            borderRadius: floatingMenu.container.radius,
            zIndex: "999",
        },
    ],
    variants: {
        isOpen: {
            false: { display: "none" },
            true: {},
        },
    },
});
