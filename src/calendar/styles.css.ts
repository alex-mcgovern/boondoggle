import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { vars } from "../index.css";

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

export const calendarGridHeaderCellCSS = style([
    css({
        fontStyle: "bodySm",
        // aspectRatio: "square",

        fontWeight: "medium",
        // width: "space_8",
        height: "space_8",
        textAlign: "center",

        // display: "flex",
        // placeItems: "center",
    }),
    {
        verticalAlign: "middle",
        // outline: "none",
        // cursor: "default",
        // margin: "1px",
        // forcedColorAdjust: "none",
    },
]);

export const calendarCellCSS = style([
    css({
        aspectRatio: "square",
        borderRadius: "sm",
        display: "flex",
        fontStyle: "bodySm",
        height: "space_8",
        placeItems: "center",

        textAlign: "center",
        width: "space_8",
    }),
    {
        cursor: "pointer",
        forcedColorAdjust: "none",
        margin: "1px",
        outline: "none",

        selectors: {
            "&[data-focus-visible]": {
                background: vars.color.bg_button_secondary_active,
                borderColor: vars.color.focus_border,
                outline: `2px solid ${vars.color.focus_ring}`,
            },

            "&[data-hovered]": {
                background: vars.color.bg_button_secondary_active,
            },

            "&[data-outside-month]": {
                display: "none",
            },

            "&[data-pressed]": {
                background: vars.color.bg_button_secondary_active,
            },

            "&[data-selected]": {
                background: vars.color.button_tint,
                color: vars.color.bg_button_primary,
            },
        },
    },
]);
