import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocusStyleRule } from "../../styles/common/a11y.css";
import { elementHeight, elementPadding } from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const tabSide = styleVariants({
    left: {
        borderBottomLeftRadius: vars.borderRadius.md,
        borderTopLeftRadius: vars.borderRadius.md,
    },
    right: {
        borderBottomRightRadius: vars.borderRadius.md,
        borderTopRightRadius: vars.borderRadius.md,
    },
});

const hasBorder = styleVariants({
    false: {},
    true: {},
});

globalStyle(`${tabSide.left} input`, {
    borderBottomRightRadius: "0",
    borderRight: "none",
    borderTopRightRadius: "0",
});

globalStyle(`${tabSide.right} input`, {
    borderBottomLeftRadius: "0",
    borderLeft: "none",
    borderTopLeftRadius: "0",
});

const tabSize = styleVariants({
    lg: [{ height: elementHeight.lg }],
    md: [{ height: elementHeight.md }],
    sm: [{ height: elementHeight.sm }],
});

const paddingSize = styleVariants({
    lg: [elementPadding.lg],
    md: [elementPadding.md],
    sm: [elementPadding.sm],
});

export const getAddonTabStyle = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            background: "tint_default",
            color: "text_low_contrast",
            display: "flex",
            fontStyle: "bodyMd",
            fontWeight: "medium",
        }),
        {
            selectors: {
                "&:focus-within": {
                    ...a11yFocusStyleRule,
                },
            },
        },
    ],
    compoundVariants: [
        {
            style: [
                {
                    borderBottom: `1px solid ${vars.color.border_default}`,
                    borderBottomLeftRadius: vars.borderRadius.md,
                    borderLeft: `1px solid ${vars.color.border_default}`,
                    borderTop: `1px solid ${vars.color.border_default}`,
                    borderTopLeftRadius: vars.borderRadius.md,
                },
            ],
            variants: { hasBorder: true, side: "left" },
        },
        {
            style: [
                {
                    borderBottom: `1px solid ${vars.color.border_default}`,
                    borderBottomRightRadius: vars.borderRadius.md,
                    borderRight: `1px solid ${vars.color.border_default}`,
                    borderTop: `1px solid ${vars.color.border_default}`,
                    borderTopRightRadius: vars.borderRadius.md,
                },
            ],
            variants: { hasBorder: true, side: "right" },
        },
    ],
    defaultVariants: {
        side: "left",
        size: "md",
    },
    variants: {
        hasBorder,
        paddingSize,
        side: tabSide,
        size: tabSize,
    },
});

const hasAddonLeft = styleVariants({
    false: {},
    true: {},
});

const hasAddonRight = styleVariants({
    false: {},
    true: {},
});

export const getAddonWrapperStyle = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            display: "flex",
            width: "100%",
        }),
    ],
    variants: {
        hasAddonLeft,
        hasAddonRight,
    },
});

export const addonChildrenStyle = style({
    flexGrow: 1,
    flexShrink: 0,
    // width: "100%",
});

globalStyle(`${hasAddonLeft.true} > ${addonChildrenStyle} input`, {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
});

globalStyle(`${hasAddonRight.true} > ${addonChildrenStyle} input`, {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
});
