import { recipe } from "@vanilla-extract/recipes";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getMainStyles = recipe({
    base: [
        getSprinkles({
            marginX: "auto",
            paddingX: "space_4",
        }),
    ],
    defaultVariants: {
        size: "lg",
    },
    variants: {
        size: {
            lg: [getSprinkles({ maxWidth: "main_lg" })],
            md: [getSprinkles({ maxWidth: "main_md" })],
            sm: [getSprinkles({ maxWidth: "main_sm" })],
        },
    },
});
