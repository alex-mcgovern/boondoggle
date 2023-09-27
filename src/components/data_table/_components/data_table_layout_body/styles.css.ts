import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { tRowStyles } from "../../../../styles/stylesheet.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const variantClickable = styleVariants({
    false: {},
    true: {
        cursor: "pointer",
        selectors: {
            [`&:hover`]: {
                backgroundColor: vars.color.tint_default,
            },
        },
    },
});

const baseRowStyles = style({});

export const getRowStyles = recipe({
    base: [
        tRowStyles,
        baseRowStyles,
        getSprinkles({
            color: "text_high_contrast",
            textDecoration: "none",
        }),
        {
            ...createAccessibleTransition({
                transition: `background-color ${vars.transitionDuration.medium} ease`,
            }),
        },
    ],
    defaultVariants: {
        isRowClickable: false,
    },
    variants: {
        isRowClickable: variantClickable,
    },
});
