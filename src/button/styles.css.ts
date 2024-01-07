import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import {
    ACTIVE,
    HOVER,
    a11yDisabled,
    a11yFocus,
    variantColorOverlay,
    vars,
} from "../index.css";

export const buttonCSS = recipe({
    base: [
        a11yFocus,
        a11yDisabled,
        css({
            alignItems: "center",
            borderRadius: "md",
            display: "inline-flex",
            flexShrink: "0",

            fontStyle: "bodyMd",
            gap: "space_2",

            textDecoration: "none",
        }),
        {
            outline: "0px solid transparent",
        },
        withPrefersMotion({
            transitionDuration: vars.transitionDuration.short,
            transitionProperty:
                "color, background, border-color, outline, opacity",
            transitionTimingFunction: vars.ease.quart_in_out,
        }),
    ],

    defaultVariants: {
        alignment: "center",
        appearance: "primary",
        size: "sm",
    },

    variants: {
        alignment: {
            center: [css({ justifyContent: "center", textAlign: "center" })],
            left: [css({ justifyContent: "start", textAlign: "left" })],
        },
        appearance: {
            ghost: [
                css({
                    fontWeight: "medium",
                    whiteSpace: "nowrap",
                }),
                {
                    color: vars.color.text_high_contrast,
                    selectors: {
                        [`&${ACTIVE}`]: {
                            background: vars.color.tint_hover,
                        },
                        [`&${HOVER}`]: {
                            background: vars.color.tint_hover,
                        },
                    },
                },
            ],

            primary: [
                css({
                    fontWeight: "medium",
                    whiteSpace: "nowrap",
                }),
                {
                    background: vars.color.bg_button_primary,
                    color: vars.color.white,
                    selectors: {
                        [`&${ACTIVE}`]: {
                            background: vars.color.bg_button_primary_active,
                        },
                        [`&${HOVER}`]: {
                            background: vars.color.bg_button_primary_active,
                            color: vars.color.white,
                        },
                    },
                },
            ],

            secondary: [
                css({
                    fontWeight: "medium",
                    whiteSpace: "nowrap",
                }),
                {
                    border: "1px solid",
                    borderColor: vars.color.border_field,
                    color: vars.color.text_high_contrast,
                    selectors: {
                        "&[data-focus-visible]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },
                        /**
                         * Whether the button is focused, either via a mouse or keyboard.
                         */

                        "&[data-focused]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },

                        /**
                         * Whether the button is keyboard focused.
                         */

                        [`&${ACTIVE}`]: {
                            background: vars.color.tint_hover,
                            borderColor: vars.color.border_field_active,
                        },
                        [`&${HOVER}`]: {
                            background: vars.color.tint_hover,
                            borderColor: vars.color.border_field_active,
                        },
                    },
                },
            ],
        },
        colorOverlay: variantColorOverlay,
        size: {
            lg: [
                css({
                    height: "space_12",
                    paddingX: "space_6",
                    paddingY: "space_3",
                }),
            ],
            md: [
                css({
                    height: "space_10",
                    paddingX: "space_4",
                    paddingY: "space_3",
                }),
            ],
            sm: [
                css({
                    height: "space_8",
                    paddingX: "space_3",
                    paddingY: "space_1",
                }),
            ],
            square_lg: [
                css({
                    aspectRatio: "square",
                    flexGrow: "0",
                    height: "space_12",
                    width: "space_12",
                }),
            ],
            square_md: [
                css({
                    aspectRatio: "square",
                    flexGrow: "0",
                    height: "space_10",
                    width: "space_10",
                }),
            ],
            square_sm: [
                css({
                    aspectRatio: "square",
                    flexGrow: "0",
                    height: "space_8",
                    width: "space_8",
                }),
            ],
            square_xs: [
                css({
                    aspectRatio: "square",
                    flexGrow: "0",
                    height: "space_6",
                    width: "space_6",
                }),
            ],
            xs: [
                css({
                    height: "space_6",
                    paddingX: "space_3",
                    paddingY: "space_0",
                }),
            ],
        },
    },
});

export type ButtonVariants = Parameters<typeof buttonCSS>[0];
