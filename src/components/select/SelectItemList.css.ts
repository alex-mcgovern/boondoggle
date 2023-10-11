import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../styles/common/a11y.css";
import { elementPaddingRaw } from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const groupTitleSize = styleVariants({
    lg: {
        paddingLeft: calc.subtract(
            elementPaddingRaw.lg.x,
            vars.spacing.space_1
        ),
        paddingRight: calc.subtract(
            elementPaddingRaw.lg.x,
            vars.spacing.space_1
        ),
    },
    md: {
        paddingLeft: calc.subtract(
            elementPaddingRaw.md.x,
            vars.spacing.space_1
        ),
        paddingRight: calc.subtract(
            elementPaddingRaw.md.x,
            vars.spacing.space_1
        ),
    },
    sm: {
        paddingLeft: calc.subtract(
            elementPaddingRaw.sm.x,
            vars.spacing.space_1
        ),
        paddingRight: calc.subtract(
            elementPaddingRaw.sm.x,
            vars.spacing.space_1
        ),
    },
});

export const getGroupTitle = recipe({
    base: [
        getSprinkles({
            color: "text_low_contrast",
            fontStyle: "bodySm",
            marginY: "space_2",
        }),
    ],
    variants: {
        size: groupTitleSize,
    },
});

export const getOuter = recipe({
    base: [
        a11yFocus,
        getSprinkles({
            background: "background",
            border: "border_default",
            borderRadius: "md",
            boxShadow: "md",
            minWidth: "100%",
            overflow: "hidden",
            width: "max-content",
            zIndex: "1",
        }),
    ],
    variants: {
        isOpen: {
            false: { display: "none" },
            true: {},
        },
    },
});

export const inner = style([
    getSprinkles({
        overflowY: "auto",
        padding: "space_1",
    }),
    {
        borderCollapse: "collapse",
        listStyle: "none",
        maxHeight: "15rem",
        minWidth: "10rem",
        selectors: {
            "&:empty": {
                display: "none",
            },
        },
    },
]);
