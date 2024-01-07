import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";

export const mainCSS = recipe({
    base: [
        css({
            marginX: "auto",
            paddingX: "space_4",
        }),
        {
            scrollbarGutter: "stable",
        },
    ],
    defaultVariants: {
        size: "lg",
    },
    variants: {
        size: {
            lg: [css({ maxWidth: "main_lg" })],
            md: [css({ maxWidth: "main_md" })],
            sm: [css({ maxWidth: "main_sm" })],
        },
    },
});
