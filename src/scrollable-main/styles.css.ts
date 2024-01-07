import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";
import { vars } from "../index.css";

export const nonScrollableWrapperCSS = style({
    height: "100dvh",
    overflow: "hidden",
});

export const scrollableMainCSS = recipe({
    base: [
        css({
            height: "100dvh",
            overflowX: "hidden",
            overflowY: "auto",
            paddingX: "space_4",
            width: "100%",
        }),
        {
            scrollbarGutter: "stable",
        },
    ],
    defaultVariants: {
        headers: "1",
    },
    variants: {
        headers: {
            "0": {
                height: "100dvh",
            },
            "1": {
                height: calc.subtract("100dvh", vars.height.topBar),
            },
            "2": {
                height: calc.subtract(
                    "100dvh",
                    vars.height.topBar,
                    vars.height.topBar,
                ),
            },
        },
    },
});

export const scrollableMainInnerCSS = recipe({
    base: [
        css({
            marginX: "auto",
        }),
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
