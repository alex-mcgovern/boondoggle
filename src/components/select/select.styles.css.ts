import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import { elementSize } from "../../styles/common/element_size.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dropdownListInner = style([
    {
        maxHeight: "33vh",
    },
]);

export const dropdownWrapperClosed = style({
    display: "none",
    visibility: "hidden",
});

export const dropdownListWrapper = style([
    a11yFocus,
    getSprinkles({
        background: "background",
        marginTop: "spacing1",
        minWidth: "gridSpan3",
        display: "block",
        margin: "none",

        /** Style as a card */
        borderRadius: "sm",
        overflow: "hidden",
        isolation: "isolate",
        boxShadow: "sm",
        border: "border_default",
        overflowY: "auto",
    }),
    {
        position: "absolute",
        zIndex: 999,
        width: "100%",
        maxHeight: "10rem",
        selectors: {
            "&:empty": {
                display: "none",
            },
        },
    },
    createAccessibleTransition({
        transformOrigin: "top center",
    }),
]);

/**
 * Dropdown item styles
 */
export const getDropdownItemStyles = recipe({
    base: [
        getSprinkles({
            width: "100%",

            display: "flex",
            alignItems: "center",
            gap: "spacing1",

            color: "text_high_contrast",
            textDecoration: "none",
            textAlign: "left",

            margin: "none",
            padding: "spacing1",
        }),
        a11yDisabled,
        a11yFocus,
    ],
    variants: {
        size: elementSize,
    },
});

export const isHighlighted = style({
    backgroundColor: vars.color.tint_active,
});

export const isSelected = style({
    fontWeight: vars.fontWeight.semibold,
});

export const listItemWrapper = style({
    paddingLeft: "0",
    marginTop: "0",
});
