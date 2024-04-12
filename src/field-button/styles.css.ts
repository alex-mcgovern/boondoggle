import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

export const fieldButtonCSS = style([
    css({
        borderRadius: "sm",

        color: "text_low_contrast",
        flexShrink: "0",
        fontStyle: "bodyMd",

        height: "space_6",
        width: "space_6",
    }),
    withPrefersMotion({
        transitionDuration: "var(--dur-short)",
        transitionProperty: "background, color",
        transitionTimingFunction: "var(--ease-quart-in-out)",
    }),
    {
        selectors: {
            /**
             * Ensure spacing between field-buttons within a group.
             */
            "&:first-of-type": {
                marginLeft: "var(--space-1)",
            },
            "&:last-of-type": {
                marginRight: "var(--space-1)",
            },

            /**
             * Whether the button is disabled.
             */
            "&[data-disabled]": {
                opacity: 0.5,
            },
            /**
             * Whether the button is keyboard focused.
             */
            "&[data-focus-visible]": {
                background: "var(--clr-btn_bg_secondary_active)",
                color: "var(--clr-text_high_contrast)",
                outline: 0,
            },
            /**
             * Whether the button is focused, either via a mouse or keyboard.
             */
            "&[data-focused]": {
                background: "var(--clr-btn_bg_secondary_active)",
                color: "var(--clr-text_high_contrast)",
                outline: 0,
            },
            /**
             * Whether the button is currently hovered with a mouse.
             */
            "&[data-hovered]": {
                background: "var(--clr-btn_bg_secondary_active)",
                color: "var(--clr-text_high_contrast)",
            },
            /**
             * Whether the button is currently in a pressed state.
             */
            "&[data-pressed]": {
                background: "var(--clr-btn_bg_secondary_active)",
                color: "var(--clr-text_high_contrast)",
            },
        },
    },
]);
