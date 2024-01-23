import type { ButtonRenderProps } from "react-aria-components";

import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../_css-utils/react-aria-recipe";

import { withPrefersMotion } from "../../../_css-utils";
import { css } from "../../../css/index.css";
import { HOVER, vars } from "../../../index.css";

const sortControlBase = style({});

export const tableSortButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        sortControlBase,
        css({
            alignItems: "center",
            borderRadius: "sm",
            color: "text_low_contrast",
            display: "flex",
            flexShrink: "0",
            gap: "space_2",
            marginRight: "auto",
        }),
        withPrefersMotion({
            transition: `color ${vars.transitionDuration.short} ease`,
        }),
        {
            [`&${HOVER}`]: {
                color: vars.color.text_high_contrast,
            },
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({ color: "text_high_contrast", outline: "focus" }),
        },
        isHovered: {
            false: {},
            true: css({ color: "text_high_contrast" }),
        },
        isPressed: {
            false: {},
            true: css({ color: "text_high_contrast" }),
        },
        isSorted: {
            false: {},
            true: {},
        },
    },
});

export const sortIconStyle = style({
    opacity: 0.4,
    ...withPrefersMotion({
        transition: `opacity ${vars.transitionDuration.short} ease`,
    }),

    /**
     * @note There was a bug with the table actions wrapper which
     * caused the sort icon to appear over dropdowns. This is
     * an ugly fix to make sure the sort icon is always behind.
     */
    zIndex: -1,
});

globalStyle(
    `${tableSortButtonCSS({ isSorted: "false" })}:hover ${sortIconStyle}`,
    {
        opacity: 0.7,
    },
);
