import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { makeTheme, withPrefersMotion } from "../_css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const selectValueCSS = style([
    sprinkles({
        alignItems: "center",
        display: "flex",
        gap: "space_2",
    }),
]);

export const selectCSS = style([
    sprinkles({ flexShrink: "0" }),
    {
        selectors: {
            /**
             * Whether the select is disabled.
             */
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },

            /**
             * Whether the select is invalid.
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

export const selectButtonCSS = recipe({
    base: [
        sprinkles({
            alignItems: "center",
            color: "text_high_contrast",

            display: "flex",

            flexShrink: "0",

            fontStyle: "bodySm",

            gap: "space_2",
            height: "element_sm",
            paddingX: "space_2",
            width: "100%",
        }),
        withPrefersMotion({
            transitionDuration: vars.transitionDuration.short,
            transitionProperty:
                "color, background, border-color, outline, opacity",
            transitionTimingFunction: vars.ease.quart_in_out,
        }),
        {
            outline: "0px solid transparent",

            selectors: {
                "&[data-disabled]": {
                    cursor: "not-allowed !important",
                    opacity: 0.5,
                },

                /**
                 * Whether the select button is disabled.
                 */

                "&[data-placeholder]": {
                    color: vars.color.text_low_contrast,
                },
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: {
            borderless: {
                selectors: {
                    /**
                     * Whether the select button is keyboard focused.
                     */
                    "&[data-focus-visible]": {
                        outline: 0,
                    },

                    /**
                     * Whether the select button is focused, either via a mouse or keyboard.
                     */
                    "&[data-focused]": {
                        outline: 0,
                    },
                },
            },
            default: [
                sprinkles({
                    background: "text_field_background",
                    border: "border_element",

                    borderRadius: "md",
                }),
                withPrefersMotion({
                    transitionDuration: vars.transitionDuration.short,
                    transitionProperty:
                        "color, background, border-color, outline, opacity",
                    transitionTimingFunction: vars.ease.quart_in_out,
                }),
                {
                    outline: "0px solid transparent",

                    selectors: {
                        /**
                         * Whether the select button is currently hovered with a mouse.
                         */

                        "&[data-disabled]": {
                            cursor: "not-allowed !important",
                            opacity: 0.5,
                        },

                        /**
                         * Whether the select button is currently in a pressed state.
                         */

                        "&[data-focus-visible]": {
                            background:
                                vars.color.text_field_background_highlighted,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },

                        /**
                         * Whether the select button is focused, either via a mouse or keyboard.
                         */

                        "&[data-focused]": {
                            background:
                                vars.color.text_field_background_highlighted,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },

                        /**
                         * Whether the select button is keyboard focused.
                         */

                        "&[data-hovered]": {
                            background:
                                vars.color.text_field_background_highlighted,
                            borderColor: vars.color.border_element_active,
                        },

                        /**
                         * Whether the select button is disabled.
                         */

                        "&[data-pressed]": {
                            background:
                                vars.color.text_field_background_highlighted,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },
                    },
                },
            ],
        },
    },
});
