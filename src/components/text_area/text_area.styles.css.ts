import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import { elementSize } from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getWrapperStyles = recipe({
    variants: { size: elementSize },
    defaultVariants: {
        size: "md",
    },
});

export const textArea = style([
    getSprinkles({
        width: "100%",
    }),
    a11yDisabled,
    a11yFocus,
]);
