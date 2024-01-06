import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const fieldButtonCSS = style([
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
