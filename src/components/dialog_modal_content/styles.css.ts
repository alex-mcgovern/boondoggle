import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogContentOuterStyle = style([
    getSprinkles({
        maxWidth: "100%",
        overflowY: "auto",
        width: "100%",
    }),
    {
        overflowX: "hidden",
    },
]);

export const getDialogContentInnerStyle = recipe({
    base: [
        getSprinkles({
            height: "100%",
        }),
        {
            transition: "max-height 100ms ease",
        },
    ],
    defaultVariants: {
        hasPadding: true,
    },
    variants: {
        hasPadding: {
            false: {},
            true: [getSprinkles({ padding: "space_4" })],
        },
    },
});
