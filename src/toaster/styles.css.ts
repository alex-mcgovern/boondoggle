import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { HOVER, a11yFocus, vars } from "../index.css";

export const toastCloseButtonCSS = style([
    a11yFocus,
    css({
        borderRadius: "md",
        color: "toast_text",
        height: "space_8",
        marginLeft: "auto",
        width: "space_8",
    }),
    {
        ...withPrefersMotion({
            transition: `background ${vars.transitionDuration.short} ${vars.ease.quart_in_out}, color ${vars.transitionDuration.short} ${vars.ease.quart_in_out}`,
        }),
        selectors: {
            [`&${HOVER}`]: {
                background: vars.color.text_low_contrast,
            },
        },
    },
]);

export const toastCSS = css({
    alignItems: "center",
    background: "bg_toast",
    borderRadius: "md",
    boxShadow: "lg",
    color: "white",
    display: "flex",
    gap: "space_1",
    justifySelf: "end",
    paddingX: "space_3",
    paddingY: "space_2",
});

export const toastTitleCSS = css({
    color: "toast_text",
    fontStyle: "bodyMd",
    fontWeight: "semibold",
});

export const toastDescriptionCSS = css({
    color: "toast_text",
    fontStyle: "bodyMd",
});
