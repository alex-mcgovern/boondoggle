import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getRowStyles = recipe({
    base: [
        getSprinkles({
            color: "text_high_contrast",
            textDecoration: "none",
        }),
        {
            display: "table-row",
        },
    ],
    variants: {
        isWholeRowClickable: {
            false: {},
            true: {
                cursor: "pointer",
                selectors: {
                    "&:hover": {
                        backgroundColor: vars.color.tint_default,
                    },
                },
                ...createAccessibleTransition({
                    transition: `background-color ${vars.transitionDuration.medium} ease`,
                }),
            },
        },
    },
});

export const tdStyle = style({
    borderBottom: `1px solid ${vars.color.border_default}`,
});
