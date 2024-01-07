import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withPrefersMotion } from "../../../../_css-utils";
import { css } from "../../../../css/index.css";
import { a11yFocusStyleRule, vars } from "../../../../index.css";

export const activeFilterStringCSS = style([
    css({ display: "inline-block" }),
    {
        maxWidth: "5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
]);

export const multiFilterListCSS = style([
    css({
        marginY: "space_2",
        paddingX: "space_4",
    }),
    {
        maxHeight: "12.5rem",
        overflowY: "auto",
    },
]);

export const multiFilterItemCSS = style([
    css({
        borderRadius: "md",
        paddingX: "space_2",
        paddingY: "space_1",
    }),
    {
        margin: `0 ${calc.multiply(vars.spacing.space_2, -1)}`,
        ...withPrefersMotion({
            transition: `background ${vars.transitionDuration.short} ease`,
        }),
        selectors: {
            "&:active": {
                background: vars.color.tint_hover,
                cursor: "pointer",
            },
            "&:has(input:focus-visible)": {
                ...a11yFocusStyleRule,
            },
            "&:hover": {
                background: vars.color.tint_default,
                cursor: "pointer",
            },
        },
    },
]);

export const multiFilterItemCheckboxCSS = style([
    {
        selectors: {
            "&:focus": {
                outline: "none",
            },
        },
    },
]);

export const multiFilterItemTextCSS = style([
    css({
        overflow: "hidden",
        whiteSpace: "nowrap",
    }),
    {
        textOverflow: "ellipsis",
    },
]);
