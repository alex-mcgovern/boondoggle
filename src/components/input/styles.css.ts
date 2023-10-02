import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocusStyleRule } from "../../styles/common/a11y.css";
import {
    elementFontSize,
    elementHeight,
    elementPaddingRaw,
} from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
    lg: [
        elementFontSize.md,
        { padding: elementPaddingRaw.lg.y },
        { height: elementHeight.lg },
    ],
    md: [
        elementFontSize.md,
        { padding: elementPaddingRaw.md.y },
        { height: elementHeight.md },
    ],
    sm: [
        elementFontSize.md,
        { padding: elementPaddingRaw.sm.y },
        { height: elementHeight.sm },
    ],
});

const hasBorder = styleVariants({
    false: [{ border: "none !important", borderRadius: "0 !important" }],
    true: [],
});

export const inputSlotWrapperDoNotRemoveOrYouWillBeFired = style([]);

export const getSlotWrapperStyles = recipe({
    base: [
        inputSlotWrapperDoNotRemoveOrYouWillBeFired,
        getSprinkles({
            alignItems: "center",
            background: "background",
            border: "border_default",
            borderRadius: "md",
            color: "text_low_contrast",
            display: "flex",
            fontWeight: "normal",
            gap: "space_1",
            width: "100%",
        }),
        a11yDisabled,
        {
            cursor: "text",
            // gridTemplateColumns: `repeat(auto-fit, minmax(${vars.spacing.space_5}, auto))`,
            ...createAccessibleTransition({
                transition: `ease ${vars.transitionDuration.short} ease`,
                transitionProperty: "color, background-color, border-color",
            }),
            selectors: {
                /* eslint-disable sort-keys-fix/sort-keys-fix */
                "&:has(input[readonly])": {
                    background: vars.color.tint_default,
                },
                "&:hover": {
                    borderColor: vars.color.border_hover,
                },
                "&:active": {
                    borderColor: vars.color.border_active,
                },
                "&:has(input:is(:focus,:focus-visible))": {
                    ...a11yFocusStyleRule,
                },
                /* eslint-enable sort-keys-fix/sort-keys-fix */
            },
        },
    ],
    defaultVariants: {
        hasBorder: true,
        size: "md",
    },
    variants: {
        hasBorder,
        size,
    },
});

globalStyle(
    `${inputSlotWrapperDoNotRemoveOrYouWillBeFired} > *:not(input):not(:empty)`,
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minWidth: vars.spacing.space_4,
    }
);

export const slotStyles = style([getSprinkles({ minWidth: "space_5" })]);

export const inputStyles = style([
    getSprinkles({
        flexGrow: "1",
        fontStyle: "bodyMd",
        height: "space_6",
        margin: "none",
        padding: "none",
        width: "100%",
    }),
    {
        background: "transparent",
        border: "none",
        selectors: {
            "&:focus": {
                outline: "none",
            },
            "&:focus-visible": {
                outline: "none",
            },
        },
    },
]);
