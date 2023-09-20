import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../../styles/color_palette.css";
import { a11yDisabled, a11yFocus } from "../../../styles/common/a11y.css";
import { elementHeight, elementPaddingRaw } from "../../../styles/common/element_size.css";
import { vars } from "../../../styles/theme.css";
import { createAccessibleTransition } from "../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";

const selectListPadding = vars.spacing.space_1;

export const getSelectItemListStyles = recipe({
    base: [
        a11yFocus,
        getSprinkles({
            background: "background",
            border: "border_default",
            borderRadius: "md",
            boxShadow: "md",
            minWidth: "100%",
            overflow: "hidden",
            width: "max-content",
            zIndex: "1",
        }),
    ],
    variants: {
        isOpen: {
            false: { display: "none" },
            true: {},
        },
    },
});

export const selectItemListInner = style([
    getSprinkles({
        overflowY: "auto",
    }),
    {
        borderCollapse: "collapse",
        listStyle: "none",
        maxHeight: "15rem",
        minWidth: "10rem",
        padding: selectListPadding,
        selectors: {
            "&:empty": {
                display: "none",
            },
        },
    },
]);

const selectItemSize = styleVariants({
    lg: [
        { height: elementHeight.lg },
        {
            padding: `${calc.subtract(elementPaddingRaw.lg.y, selectListPadding)} ${
                elementPaddingRaw.lg.x
            }`,
        },
    ],
    md: [
        { height: elementHeight.md },
        {
            padding: `${calc.subtract(elementPaddingRaw.md.y, selectListPadding)} ${
                elementPaddingRaw.md.x
            }`,
        },
    ],
    sm: [
        { height: elementHeight.sm },
        {
            padding: `${calc.subtract(elementPaddingRaw.sm.y, selectListPadding)} ${
                elementPaddingRaw.sm.x
            }`,
        },
    ],
});

export const getSelectItemStyles = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            borderRadius: "md",
            color: "text_low_contrast",
            display: "flex",
            fontStyle: "bodyMd",
            fontWeight: "normal",
            gap: "space_2",
            margin: "none",
            textAlign: "left",
            textDecoration: "none",
            width: "100%",
        }),
        a11yDisabled,
        a11yFocus,
        createAccessibleTransition({
            transition: `background ${vars.transitionDuration.short} ease`,
        }),
        {
            selectors: {
                "&:hover": {
                    cursor: "pointer",
                },
            },
        },
    ],
    variants: {
        colorOverlay: variantColorOverlay,
        size: selectItemSize,
    },
});

export const isHighlightedStyle = style([
    {
        background: vars.color.tint_active,
    },
]);
