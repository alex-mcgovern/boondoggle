import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";
import { vars } from "../index.css";

const MARGIN_TOP = "var(--space-3)";

export const headerCSS = style([
    css({
        alignItems: "center",
        border: "border_rule",
        display: "flex",
        gap: "space_4",
        padding: "space_4",
    }),
    {
        borderTopLeftRadius: "var(--radius-lg)",
        borderTopRightRadius: "var(--radius-lg)",
        marginTop: MARGIN_TOP,
    },
]);

export const cardCSS = recipe({
    base: [
        css({
            marginBottom: "space_6",
        }),
    ],
    variants: {
        hasHeader: {
            false: [
                css({
                    border: "border_rule",
                    borderRadius: "lg",
                }),
                { marginTop: MARGIN_TOP },
            ],
            true: [
                {
                    borderBottom: `1px solid var(--clr-border_rule)`,
                    borderBottomLeftRadius: "var(--radius-lg)",
                    borderBottomRightRadius: "var(--radius-lg)",
                    borderLeft: `1px solid var(--clr-border_rule)`,
                    borderRight: `1px solid var(--clr-border_rule)`,
                },
            ],
        },
        hasPadding: {
            false: [],
            true: css({
                paddingX: "space_4",
                paddingY: "space_4",
            }),
        },
    },
});
