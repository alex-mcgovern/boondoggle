import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../../../css/index.css";
import { tHeadStyles, thStyles, vars } from "../../../index.css";

const baseHeadStyle = style([
    css({
        borderTop: "border_rule",
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

export const getHeadStyle = recipe({
    base: [baseHeadStyle, tHeadStyles],
    variants: {
        hasRowActions,
        isSelectable,
    },
});

globalStyle(
    `${isSelectable.true} th:first-child, ${isSelectable.true} ${thStyles}:first-child`,
    {
        width: vars.spacing.space_1,
    },
);

globalStyle(
    `${hasRowActions.true} th:last-child, ${hasRowActions.true} ${thStyles}:last-child`,
    {
        width: calc.add(
            calc.multiply(vars.spacing.space_5, 2),
            vars.spacing.space_12,
        ),
    },
);
