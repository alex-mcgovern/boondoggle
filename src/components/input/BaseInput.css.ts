import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled } from "../../styles/common/a11y.css";
import {
    elementFontSize,
    elementHeight,
    elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
    lg: [elementFontSize.md, elementPadding.lg, { height: elementHeight.lg }],
    md: [elementFontSize.md, elementPadding.md, { height: elementHeight.md }],
    sm: [elementFontSize.md, elementPadding.sm, { height: elementHeight.sm }],
});

const hasBorder = styleVariants({
    false: [{ border: "none !important", borderRadius: "0 !important" }],
    true: [],
});

export const getBaseInputStyles = recipe({
    base: [
        getSprinkles({
            width: "100%",
        }),
        a11yDisabled,
    ],
    defaultVariants: {
        hasBorder: true,
        size: "md",
    },
    variants: {
        hasBorder,
        size,
    },
});
