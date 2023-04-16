import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { variantIntent, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const variantTagState = styleVariants({
    inactive: [
        {
            color: vars.color.text_low_contrast,
            background: vars.color.tint_default,
            borderColor: vars.color.border_default,

            selectors: {
                [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
                    color: vars.color.text_high_contrast,
                    background: vars.color.tint_active,
                    borderColor: vars.color.border_active,
                },
            },
        },
    ],

    active: [
        {
            color: vars.color.text_low_contrast,
            background: vars.color.tint_default,
            borderColor: vars.color.border_active,

            selectors: {
                [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
                    color: vars.color.text_high_contrast,
                    background: vars.color.tint_active,
                    borderColor: vars.color.border_active,
                },
            },
        },
    ],
});

export type VariantTagStateEnum = keyof typeof variantTagState;
export const getTagStyle = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            border: "border_active",
            borderRadius: "sm",
            display: "inline-flex",
            fontStyle: "body_sm",
            gap: "spacing0",
            paddingX: "spacing1",
            paddingY: "spacing0",
            whiteSpace: "nowrap",
            textDecoration: "none",
        }),
        createAccessibleTransition({
            transition: `ease ${vars.transitionDuration.short}`,
            transitionProperty: "color, background-color, border-color",
        }),
    ],

    variants: {
        state: variantTagState,
        intent: variantIntent,
    },

    defaultVariants: {
        state: "inactive",
    },
});

export const slotLeft = style({
    flexShrink: 0,
    justifySelf: "start",
    selectors: {
        "&:not(:last-child)": {
            marginRight: vars.spacing.spacing1,
        },
    },
});

export const slotRight = style({
    flexShrink: 0,
    justifySelf: "end",
    selectors: {
        "&:not(:first-of-type)": {
            marginLeft: vars.spacing.spacing1,
        },
    },
});
