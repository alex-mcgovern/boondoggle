import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";

import { makeTheme, withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

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
    sprinkles({
        borderRadius: "sm",

        color: "text_low_contrast",
        flexShrink: "0",

        height: "space_6",

        width: "space_6",
    }),
    withPrefersMotion({
        transitionDuration: vars.transitionDuration.short,
        transitionProperty: "background, color",
        transitionTimingFunction: vars.ease.quart_in_out,
    }),
    {
        selectors: {
            /**
             * Ensure even spacing when the button is at the end of the group.
             */
            "&:last-of-type": {
                marginRight: vars.spacing.space_1,
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
                background: vars.color.btn_secondary_bg_highlighted,
                color: vars.color.text_high_contrast,
                outline: 0,
            },
            /**
             * Whether the button is focused, either via a mouse or keyboard.
             */
            "&[data-focused]": {
                background: vars.color.btn_secondary_bg_highlighted,
                color: vars.color.text_high_contrast,
                outline: 0,
            },
            /**
             * Whether the button is currently hovered with a mouse.
             */
            "&[data-hovered]": {
                background: vars.color.btn_secondary_bg_highlighted,
                color: vars.color.text_high_contrast,
            },
            /**
             * Whether the button is currently in a pressed state.
             */
            "&[data-pressed]": {
                background: vars.color.btn_secondary_bg_highlighted,
                color: vars.color.text_high_contrast,
            },
        },
    },
]);
