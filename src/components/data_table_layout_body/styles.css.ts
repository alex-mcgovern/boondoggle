import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const tBodyStyles = style({
    display: "table-row-group",
});

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
        baseRowStyles,
        getSprinkles({
            color: "text_high_contrast",
            textDecoration: "none",
        }),
        {
            display: "table-row",
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

export const tdStyles = style({
    display: "table-cell",
    fontSize: vars.fontSize.body_sm,
    padding: vars.spacing.space_4,
    textAlign: "left",
    verticalAlign: "middle",
});

globalStyle(`${baseRowStyles}:not(:last-child) ${tdStyles}`, {
    borderBottom: `1px solid ${vars.color.border_default}`,
});
