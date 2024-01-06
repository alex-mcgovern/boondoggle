import { red, redA } from "@radix-ui/colors";
import { assignVars, globalStyle, style } from "@vanilla-extract/css";

import { inputBg } from "../_css/input.css";
import { makeTheme, withPrefersMotion } from "../css-utils";
import { a11yDisabled, vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const groupCSS = style([
    a11yDisabled,
    inputBg,
    sprinkles({
        alignItems: "center",
        border: "border_element",

        borderRadius: "md",
        display: "flex",

        fontStyle: "bodySm",
        height: "space_8",

        overflow: "hidden",
        paddingX: "space_1",

        position: "relative",

        width: "100%",
    }),
    withPrefersMotion({
        transitionDuration: vars.transitionDuration.short,
        transitionProperty: "color, background, border-color, outline, opacity",
        transitionTimingFunction: vars.ease.quart_in_out,
    }),
    {
        outline: "0px solid transparent",

        selectors: {
            /**
             * Whether the group is currently hovered with a mouse.
             */

            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },

            /**
             * Whether an element within the group is focused, either via a mouse or keyboard
             */

            "&[data-focus-visible]": {
                background: vars.color.text_field_background_highlighted,
                borderColor: vars.color.focus_border,
                outline: `2px solid ${vars.color.focus_ring}`,
            },

            /**
             * Whether the group is keyboard focused.
             */

            "&[data-focus-within]": {
                background: vars.color.text_field_background_highlighted,
                borderColor: vars.color.focus_border,
                outline: `2px solid ${vars.color.focus_ring}`,
            },

            /**
             * Whether the group is disabled.
             */

            "&[data-hovered]": {
                background: vars.color.text_field_background_highlighted,
                borderColor: vars.color.border_element_active,
            },

            /**
             * Whether the group is invalid.
             */

            "&[data-invalid], &:has([data-invalid])": {
                borderColor: vars.color.focus_border,
                outline: `2px solid ${vars.color.focus_ring}`,
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

globalStyle(`${groupCSS} > [data-can-group=true]`, {
    appearance: "none",
    background: "none !important",
    border: "none !important",
    font: "inherit !important",
    margin: "0 !important",
    outline: "none !important",
});
