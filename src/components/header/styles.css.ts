import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const headerStyles = style([
    getSprinkles({ marginX: "auto", maxWidth: "main", paddingX: "space_4" }),
]);
