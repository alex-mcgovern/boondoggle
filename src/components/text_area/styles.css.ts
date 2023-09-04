import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
    elementFontSize,
    elementHeight,
    elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
    lg: [elementFontSize.lg, elementPadding.lg, { minHeight: elementHeight.lg }],
    md: [elementFontSize.md, elementPadding.md, { minHeight: elementHeight.md }],
    sm: [elementFontSize.sm, elementPadding.sm, { minHeight: elementHeight.sm }],
});

export const getTextAreaStyles = recipe({
    base: [
        getSprinkles({
            width: "100%",
        }),
        a11yDisabled,
        a11yFocus,
        { resize: "none" },
    ],
    defaultVariants: {
        size: "md",
    },
    variants: {
        size,
    },
});
