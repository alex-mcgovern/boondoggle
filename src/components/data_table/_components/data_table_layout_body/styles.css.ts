import { style } from "@vanilla-extract/css";

import { tRowStyles } from "../../../../styles/stylesheet.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

const baseRowStyles = style({});

export const rowStyles = style([
    tRowStyles,
    baseRowStyles,
    getSprinkles({
        color: "text_high_contrast",
        textDecoration: "none",
    }),
    {
        selectors: {
            [`&:hover`]: {
                backgroundColor: vars.color.tint_default,
            },
        },
        ...createAccessibleTransition({
            transition: `background-color ${vars.transitionDuration.medium} ease`,
        }),
    },
]);
