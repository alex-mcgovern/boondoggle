import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const flagStyles = style([
    getSprinkles({
        aspectRatio: "square",
        border: "border_default",
        borderRadius: "50%",
        flexShrink: "0",
    }),
]);
