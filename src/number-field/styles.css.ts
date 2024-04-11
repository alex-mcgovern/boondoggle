import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";

import { makeTheme, withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

export const numberFieldCSS = style([
    {
        selectors: {
            /**
             * Whether the text field is disabled.
             */
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },

            /**
             * Whether the value is invalid.
             */
            "&[data-invalid]": {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: redA,
                        isOverlay: true,
                        primary: red,
                        secondary: red,
                    }),
                ),
            },
        },
    },
]);

export const textFieldButtonCSS = style([
    css({
        borderRadius: "sm",

        color: "text_low_contrast",
        flexShrink: "0",

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
             * Ensure even spacing when the button is at the end of the group.
             */
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
                background: "var(--clr-bg_button_secondary_active)",
                color: "var(--clr-text_high_contrast)",
                outline: 0,
            },
            /**
             * Whether the button is focused, either via a mouse or keyboard.
             */
            "&[data-focused]": {
                background: "var(--clr-bg_button_secondary_active)",
                color: "var(--clr-text_high_contrast)",
                outline: 0,
            },
            /**
             * Whether the button is currently hovered with a mouse.
             */
            "&[data-hovered]": {
                background: "var(--clr-bg_button_secondary_active)",
                color: "var(--clr-text_high_contrast)",
            },
            /**
             * Whether the button is currently in a pressed state.
             */
            "&[data-pressed]": {
                background: "var(--clr-bg_button_secondary_active)",
                color: "var(--clr-text_high_contrast)",
            },
        },
    },
]);
