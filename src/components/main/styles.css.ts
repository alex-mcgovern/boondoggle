import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const mainStyles = style([
    getSprinkles({ marginX: "auto", maxWidth: "main" }),
]);
