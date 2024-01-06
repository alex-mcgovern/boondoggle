import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { tBodyStyles, tRowStyles, tdStyles, vars } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

const baseBodyStyle = style([
    sprinkles({
        marginY: "space_3",
    }),
]);

const isSelectable = styleVariants({
    false: {},
    true: {},
});

const hasRowActions = styleVariants({
    false: {},
    true: {},
});

export const getBodyStyle = recipe({
    base: [baseBodyStyle, tBodyStyles],
    variants: {
        hasRowActions,
        isSelectable,
    },
});

globalStyle(
    `${isSelectable.true} td:first-child, ${isSelectable.true} ${tdStyles}:first-child`,
    {
        width: vars.spacing.space_1,
    },
);

globalStyle(
    `${hasRowActions.true} td:last-child, ${hasRowActions.true} ${tdStyles}:last-child`,
    {
        overflow: "visible",
        width: calc.add(
            calc.multiply(vars.spacing.space_4, 2),
            vars.spacing.space_8,
        ),
    },
);

const baseRowStyles = style({});

export const rowStyles = style([
    tRowStyles,
    baseRowStyles,
    sprinkles({
        color: "text_high_contrast",
        textDecoration: "none",
    }),
    {
        selectors: {
            "&:last-of-type": {
                borderBottom: `1px solid ${vars.color.border_rule}`,
            },
        },
    },
]);
