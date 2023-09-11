import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../../dist";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";

export const getRowStyles = recipe({
    base: {
        display: "table-row",
    },
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
