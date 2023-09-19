import { styleVariants } from "@vanilla-extract/css";

import { vars } from "../theme.css";
import { getSprinkles } from "../utils/get_sprinkles.css";

export const elementHeight = {
    lg: vars.spacing.space_12,
    md: vars.spacing.space_10,
    sm: vars.spacing.space_8,
};

export const elementFontSize = styleVariants({
    lg: [
        getSprinkles({
            fontStyle: "bodyLg",
        }),
    ],
    md: [
        getSprinkles({
            fontStyle: "bodyMd",
        }),
    ],
    sm: [
        getSprinkles({
            fontStyle: "bodySm",
        }),
    ],
});

export const elementPadding = styleVariants({
    lg: [getSprinkles({ paddingX: "space_6", paddingY: "space_3" })],
    md: [getSprinkles({ paddingX: "space_4", paddingY: "space_2" })],
    sm: [getSprinkles({ paddingX: "space_2", paddingY: "space_1" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize & keyof typeof elementPadding;
