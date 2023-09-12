import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const variantClickable = styleVariants({
    false: {},
    true: {
        cursor: "pointer",
        selectors: {
            [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
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
        isWholeRowClickable: false,
    },
    variants: {
        isWholeRowClickable: variantClickable,
    },
});

globalStyle(`${baseRowStyles}:not(:last-child) td`, {
    borderBottom: `1px solid ${vars.color.border_default}`,
});
