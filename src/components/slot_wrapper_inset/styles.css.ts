import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getSlotContainerStyles = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            bottom: "0",
            color: "inherit",
            display: "flex",
            justifyContent: "center",
            margin: "space_1",
            position: "absolute",
            top: "0",
        }),
        { pointerEvents: "none" },
    ],
    compoundVariants: [
        {
            style: { width: vars.spacing.space_6 },
            variants: { numSlots: 1, size: "sm" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_6, 2),
                },
            ],
            variants: { numSlots: 2, size: "sm" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_6, 3),
                },
            ],
            variants: { numSlots: 3, size: "sm" },
        },
        {
            style: { width: vars.spacing.space_8 },
            variants: { numSlots: 1, size: "md" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_8, 2),
                },
            ],
            variants: { numSlots: 2, size: "md" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_8, 3),
                },
            ],
            variants: { numSlots: 3, size: "md" },
        },
        {
            style: { width: vars.spacing.space_10 },
            variants: { numSlots: 1, size: "lg" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_10, 2),
                },
            ],
            variants: { numSlots: 2, size: "lg" },
        },
        {
            style: [
                {
                    width: calc.multiply(vars.spacing.space_10, 3),
                },
            ],
            variants: { numSlots: 3, size: "lg" },
        },
    ],

    variants: {
        numSlots: {
            1: {},
            2: {},
            3: {},
        },
        size: {
            lg: {},
            md: {},
            sm: {},
        },
    },
});

export const getSlotRightOffsetStyles = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            display: "flex",
        }),
    ],
    compoundVariants: [
        {
            style: { paddingRight: vars.spacing.space_6 },
            variants: { numSlots: 1, size: "sm" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_6, 2),
                },
            ],
            variants: { numSlots: 2, size: "sm" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_6, 3),
                },
            ],
            variants: { numSlots: 3, size: "sm" },
        },
        {
            style: { paddingRight: vars.spacing.space_8 },
            variants: { numSlots: 1, size: "md" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_8, 2),
                },
            ],
            variants: { numSlots: 2, size: "md" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_8, 3),
                },
            ],
            variants: { numSlots: 3, size: "md" },
        },
        {
            style: { paddingRight: vars.spacing.space_10 },
            variants: { numSlots: 1, size: "lg" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_10, 2),
                },
            ],
            variants: { numSlots: 2, size: "lg" },
        },
        {
            style: [
                {
                    paddingRight: calc.multiply(vars.spacing.space_10, 3),
                },
            ],
            variants: { numSlots: 3, size: "lg" },
        },
    ],
    variants: {
        numSlots: {
            1: {},
            2: {},
            3: {},
        },
        size: {
            lg: {},
            md: {},
            sm: {},
        },
    },
});

export const getSlotLeftOffsetStyles = recipe({
    base: [
        getSprinkles({
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
        }),
    ],
    compoundVariants: [
        {
            style: { paddingLeft: vars.spacing.space_6 },
            variants: { numSlots: 1, size: "sm" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_6, 2),
                },
            ],
            variants: { numSlots: 2, size: "sm" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_6, 3),
                },
            ],
            variants: { numSlots: 3, size: "sm" },
        },
        {
            style: { paddingLeft: vars.spacing.space_8 },
            variants: { numSlots: 1, size: "md" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_8, 2),
                },
            ],
            variants: { numSlots: 2, size: "md" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_8, 3),
                },
            ],
            variants: { numSlots: 3, size: "md" },
        },
        {
            style: { paddingLeft: vars.spacing.space_10 },
            variants: { numSlots: 1, size: "lg" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_10, 2),
                },
            ],
            variants: { numSlots: 2, size: "lg" },
        },
        {
            style: [
                {
                    paddingLeft: calc.multiply(vars.spacing.space_10, 3),
                },
            ],
            variants: { numSlots: 3, size: "lg" },
        },
    ],
    variants: {
        numSlots: {
            1: {},
            2: {},
            3: {},
        },
        size: {
            lg: {},
            md: {},
            sm: {},
        },
    },
});

export const getSlotInnerStyles = recipe({
    base: getSprinkles({
        alignItems: "center",
        color: "inherit",
        display: "flex",
        flexShrink: "0",
        justifyContent: "center",
    }),
    variants: {
        size: {
            lg: [
                {
                    height: vars.spacing.space_10,
                    width: vars.spacing.space_10,
                },
                getSprinkles({
                    fontStyle: "bodyMd",
                }),
            ],
            md: [
                {
                    height: vars.spacing.space_8,
                    width: vars.spacing.space_8,
                },
                getSprinkles({
                    fontStyle: "bodySm",
                }),
            ],
            sm: [
                {
                    height: vars.spacing.space_6,
                    width: vars.spacing.space_6,
                },
                getSprinkles({
                    fontStyle: "bodySm",
                }),
            ],
        },
    },
});
