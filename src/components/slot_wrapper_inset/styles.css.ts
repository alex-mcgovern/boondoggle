import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

export const getSlotContainerStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      bottom: "0",
      display: "flex",
      justifyContent: "center",
      margin: "spacing_0.5",
      position: "absolute",
      top: "0",
    }),
    { pointerEvents: "none" },
  ],
  compoundVariants: [
    {
      style: { width: vars.spacing.spacing_3 },
      variants: { numSlots: 1, size: "sm" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_3, 2),
        },
      ],
      variants: { numSlots: 2, size: "sm" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_3, 3),
        },
      ],
      variants: { numSlots: 3, size: "sm" },
    },
    {
      style: { width: vars.spacing.spacing_4 },
      variants: { numSlots: 1, size: "md" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_4, 2),
        },
      ],
      variants: { numSlots: 2, size: "md" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_4, 3),
        },
      ],
      variants: { numSlots: 3, size: "md" },
    },
    {
      style: { width: vars.spacing.spacing_5 },
      variants: { numSlots: 1, size: "lg" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_5, 2),
        },
      ],
      variants: { numSlots: 2, size: "lg" },
    },
    {
      style: [
        {
          width: calc.multiply(vars.spacing.spacing_5, 3),
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

/** --------------------------------------------- */

export const getSlotRightOffsetStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      display: "flex",
    }),
  ],
  compoundVariants: [
    {
      style: { paddingRight: vars.spacing.spacing_3 },
      variants: { numSlots: 1, size: "sm" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_3, 2),
        },
      ],
      variants: { numSlots: 2, size: "sm" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_3, 3),
        },
      ],
      variants: { numSlots: 3, size: "sm" },
    },
    {
      style: { paddingRight: vars.spacing.spacing_4 },
      variants: { numSlots: 1, size: "md" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_4, 2),
        },
      ],
      variants: { numSlots: 2, size: "md" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_4, 3),
        },
      ],
      variants: { numSlots: 3, size: "md" },
    },
    {
      style: { paddingRight: vars.spacing.spacing_5 },
      variants: { numSlots: 1, size: "lg" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_5, 2),
        },
      ],
      variants: { numSlots: 2, size: "lg" },
    },
    {
      style: [
        {
          paddingRight: calc.multiply(vars.spacing.spacing_5, 3),
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

/** ----------------------------------------------------------------------------- */

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
      style: { paddingLeft: vars.spacing.spacing_3 },
      variants: { numSlots: 1, size: "sm" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_3, 2),
        },
      ],
      variants: { numSlots: 2, size: "sm" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_3, 3),
        },
      ],
      variants: { numSlots: 3, size: "sm" },
    },
    {
      style: { paddingLeft: vars.spacing.spacing_4 },
      variants: { numSlots: 1, size: "md" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_4, 2),
        },
      ],
      variants: { numSlots: 2, size: "md" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_4, 3),
        },
      ],
      variants: { numSlots: 3, size: "md" },
    },
    {
      style: { paddingLeft: vars.spacing.spacing_5 },
      variants: { numSlots: 1, size: "lg" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_5, 2),
        },
      ],
      variants: { numSlots: 2, size: "lg" },
    },
    {
      style: [
        {
          paddingLeft: calc.multiply(vars.spacing.spacing_5, 3),
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

/** ----------------------------------------------------------------------------- */

export const getSlotInnerStyles = recipe({
  base: getSprinkles({
    alignItems: "center",
    display: "flex",
    flexShrink: "0",
    justifyContent: "center",
  }),
  variants: {
    size: {
      lg: [
        {
          height: vars.spacing.spacing_5,
          width: vars.spacing.spacing_5,
        },
        getSprinkles({
          fontStyle: "body_md",
        }),
      ],
      md: [
        {
          height: vars.spacing.spacing_4,
          width: vars.spacing.spacing_4,
        },
        getSprinkles({
          fontStyle: "body_sm",
        }),
      ],
      sm: [
        {
          height: vars.spacing.spacing_3,
          width: vars.spacing.spacing_3,
        },
        getSprinkles({
          fontStyle: "body_xs",
        }),
      ],
    },
  },
});
