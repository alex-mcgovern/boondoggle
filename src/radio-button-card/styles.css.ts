import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { a11yFocus, a11yFocusStyleRule, vars } from "../index.css";

export const radioButtonCardInputStyles = style({
    position: "absolute",
    right: vars.spacing.space_4,
    selectors: {
        "&:focus, &:focus-visible": {
            outline: "none",
        },
    },
    top: vars.spacing.space_4,
});

export const radioButtonCardLabelStyles = style([
    a11yFocus,
    css({
        alignItems: "center",
        border: "border_rule",
        borderRadius: "sm",
        display: "flex",
        flexGrow: "1",
        flexShrink: "1",
        gap: "space_4",
        justifyContent: "center",
        padding: "space_4",
    }),
    {
        ...withPrefersMotion({
            transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
        }),
        accentColor: vars.color.bg_button_primary,
        selectors: {
            "&:has(input:checked)": {
                background: vars.color.tint_default,
                border: `1px solid ${vars.color.border_field_active}`,
            },
            "&:has(input:focus)": {
                ...a11yFocusStyleRule,
                border: `1px solid ${vars.color.bg_button_primary}`,
            },
            "&:hover": {
                background: vars.color.tint_default,
                border: `1px solid ${vars.color.border_field}`,
                cursor: "pointer",
            },
        },
    },
]);
