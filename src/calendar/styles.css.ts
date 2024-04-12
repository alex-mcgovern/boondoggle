import type { CalendarCellRenderProps } from "react-aria-components";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const calendarCSS = style([
    css({
        color: "text_high_contrast",
        maxWidth: "100%",
    }),
    {
        width: "fit-content",
    },
]);

export const calendarHeaderCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        marginBottom: "space_1",
        marginX: "space_1",
    }),
]);

export const calendarHeadingCSS = style([
    css({
        flexGrow: "1",
        fontStyle: "bodyMd",
        margin: "none",
        textAlign: "center",
    }),
]);

export const calendarGridHeaderCSS = style([
    css({
        borderBottom: "border_rule",
    }),
]);

export const calendarGridHeaderCellCSS = style([
    css({
        color: "text_low_contrast",
        fontStyle: "bodySm",
        fontWeight: "medium",
        height: "space_8",
        textAlign: "center",
    }),
    {
        verticalAlign: "middle",
    },
]);

export const calendarCellCSS = recipe<ReactAriaRecipe<CalendarCellRenderProps>>(
    {
        base: [
            css({
                aspectRatio: "square",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                fontStyle: "bodySm",
                height: "space_8",
                margin: "space_0.25",
                outline: "none",
                placeItems: "center",
                textAlign: "center",
                width: "space_8",
            }),
        ],
        variants: {
            isDisabled: {
                false: {},
                true: css({ cursor: "not-allowed", opacity: "0.5" }),
            },
            isFocused: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "btn_primary_bg",
                    outline: "focus",
                }),
            },
            isFocusVisible: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "btn_primary_bg",
                    outline: "focus",
                }),
            },
            isHovered: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "btn_primary_bg",
                }),
            },
            isInvalid: {
                false: {},
                true: variantColorOverlay.red,
            },
            isOutsideMonth: {
                false: {},
                true: css({ cursor: "default", opacity: "0.5" }),
            },
            isOutsideVisibleRange: {
                false: {},
                true: css({ cursor: "default", opacity: "0.5" }),
            },
            isPressed: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "btn_primary_bg",
                }),
            },
            isSelected: {
                false: {},
                true: css({
                    background: "button_tint",
                    border: "focus",
                    color: "btn_primary_bg",
                }),
            },
            isSelectionEnd: {
                false: {},
                true: {},
            },
            isSelectionStart: {
                false: {},
                true: {},
            },
            isUnavailable: {
                false: {},
                true: css({ cursor: "not-allowed", opacity: "0.5" }),
            },
        },
    },
);
