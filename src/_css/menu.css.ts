import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { css } from "../css/index.css";
import { elementPaddingRaw, floatingMenu, vars } from "../index.css";

/**
 * CSS for a menu section.
 */
export const menuSectionCSS = style([
    {
        selectors: {
            "&:not(:last-child)::after": {
                background: vars.color.border_rule,
                content: "",

                display: "block",
                height: "1px",

                marginBottom: elementPaddingRaw.sm.y,
                marginLeft: floatingMenu.item.paddingX,

                marginRight: floatingMenu.item.paddingX,
                marginTop: elementPaddingRaw.sm.y,
            },
        },
    },
]);

/**
 * CSS for a menu item name.
 */
export const menuItemNameCSS = style([
    css({
        color: "text_high_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

/**
 * CSS for a menu item description.
 */
export const menuItemDescriptionCSS = style([
    css({
        color: "text_low_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

/**
 * CSS for a menu section header.
 */
export const menuHeaderCSS = style([
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",
        fontStyle: "bodySm",

        fontWeight: "normal",
        textAlign: "left",
    }),
    {
        height: calc.subtract(
            floatingMenu.item.height,
            floatingMenu.container.padding,
        ),
        paddingLeft: floatingMenu.item.paddingX,
        paddingRight: floatingMenu.item.paddingX,
    },
]);
