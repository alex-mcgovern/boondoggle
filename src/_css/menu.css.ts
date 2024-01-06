import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../css-utils";
import {
    a11yDisabled,
    a11yFocus,
    elementPaddingRaw,
    floatingMenu,
    variantColorOverlay,
    vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

export const menuCSS = style([
    sprinkles({
        background: "background",
        border: "border_rule",
        boxShadow: "md",
        overflowY: "auto",
    }),
    {
        borderRadius: floatingMenu.container.radius,
        maxHeight: "20rem",
        padding: floatingMenu.container.padding,
        selectors: {
            "&:focus": {
                outline: "none",
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

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

/** -----------------------------------------------------------------------------
 * MENU ITEM CSS
 * ------------------------------------------------------------------------------- */

export const menuItemCSS = recipe({
    base: [
        sprinkles({
            alignItems: "center",
            color: "text_high_contrast",
            display: "flex",
            flexShrink: "0",
            fontStyle: "bodySm",

            fontWeight: "normal",
            gap: "space_2",
            textAlign: "left",
            textDecoration: "none",
            width: "100%",
        }),
        a11yDisabled,
        a11yFocus,
        withPrefersMotion({
            transition: `background ${vars.transitionDuration.short} ease`,
        }),
        {
            borderRadius: floatingMenu.item.radius,
            minHeight: floatingMenu.item.height,

            padding: `${elementPaddingRaw.sm.y} ${floatingMenu.item.paddingX}`,
            selectors: {
                "&[data-focused]": {
                    background: vars.color.tint_hover,
                    cursor: "pointer",
                    outline: 0,
                },
                "&[data-hovered]": {
                    background: vars.color.tint_hover,
                    cursor: "pointer",
                },
                "&[data-selected]": {
                    fontWeight: "medium",
                },
            },
        },
    ],
    variants: {
        colorOverlay: variantColorOverlay,
    },
});

export const menuItemNameCSS = style([
    sprinkles({
        color: "text_high_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

export const menuItemDescriptionCSS = style([
    sprinkles({
        color: "text_low_contrast",
        display: "block",
        fontStyle: "bodySm",
    }),
]);

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = style([
    sprinkles({
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

/** -----------------------------------------------------------------------------
 * MENU SEPARATOR
 * ------------------------------------------------------------------------------- */

export const menuSeparatorCSS = style([
    sprinkles({}),
    {
        background: vars.color.border_rule,
        height: "1px",

        marginBottom: vars.spacing.space_1,
        marginLeft: floatingMenu.item.paddingX,

        marginRight: floatingMenu.item.paddingX,
        marginTop: vars.spacing.space_1,
    },
]);
