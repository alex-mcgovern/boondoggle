import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../css/index.css";
import { vars } from "../index.css";

const MARGIN_TOP = vars.spacing.space_3;

export const headerCSS = style([
    css({
        alignItems: "center",
        border: "border_rule",
        display: "flex",
        gap: "space_4",
        padding: "space_4",
    }),
    {
        borderTopLeftRadius: vars.borderRadius.lg,
        borderTopRightRadius: vars.borderRadius.lg,
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
                    borderBottom: `1px solid ${vars.color.border_rule}`,
                    borderBottomLeftRadius: vars.borderRadius.lg,
                    borderBottomRightRadius: vars.borderRadius.lg,
                    borderLeft: `1px solid ${vars.color.border_rule}`,
                    borderRight: `1px solid ${vars.color.border_rule}`,
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
