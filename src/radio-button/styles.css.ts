import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../css-utils";
import { a11yFocus, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const radioButtonWrapperStyles = style([
    sprinkles({
        alignItems: "start",
        borderRadius: "sm",
        display: "flex",
        gap: "space_2",
    }),
]);

export const radioButtonInputStyles = style([
    a11yFocus,
    sprinkles({ borderRadius: "50%", marginTop: "space_1" }),
]);

export const radioButtonLabelStyles = style([
    sprinkles({
        fontSize: "bodyMd",
        position: "relative",
    }),
    {
        lineHeight: "1.25",
        ...withPrefersMotion({
            transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
        }),
        accentColor: vars.color.button_default,
        selectors: {
            "&:hover": {
                cursor: "pointer",
            },
        },
    },
]);
