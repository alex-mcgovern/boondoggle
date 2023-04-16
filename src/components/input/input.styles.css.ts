import { style } from "@vanilla-extract/css";

import { a11yDisabled } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const input = style([
    getSprinkles({
        width: "100%",
    }),
    a11yDisabled,
]);
