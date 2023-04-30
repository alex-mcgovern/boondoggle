import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
} from "../common/media_queries.css";
import { sprinklesLayer } from "../layers.css";
import { vars } from "../theme.css";

/**
 * Util function for extracting color vars for use with a sprinkles property
 */
export const sprinklesProperties = defineProperties({
  "@layer": sprinklesLayer,
  properties: {
    aspectRatio: vars.aspectRatio,
    boxShadow: vars.boxShadow,

    /** Border radius */
    borderRadius: vars.borderRadius,

    /** Border */
    border: {
      border_default: `1px solid ${vars.color.border_default}`,
      border_active: `1px solid ${vars.color.border_active}`,
    },
    borderRight: vars.border,
    borderLeft: vars.border,
    borderBottom: vars.border,
    borderTop: vars.border,

    /** Color  */
    background: { ...vars.color, inherit: "inherit" },
    color: { ...vars.color, inherit: "inherit" },

    /** Flex * Grid */
    alignItems: ["stretch", "start", "center", "end"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    flexGrow: ["0", "1"],
    flexShrink: ["0", "1"],
    gap: vars.spacing,
    columnGap: vars.spacing,
    rowGap: vars.spacing,
    justifyContent: [
      "stretch",
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
    ],
    flex: ["0 1 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
    fontWeight: vars.fontWeight,
    isolation: ["isolate"],

    margin: vars.spacing,
    padding: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: { ...vars.height, ...vars.spacing },
    maxWidth: vars.width,
    minWidth: { ...vars.width, ...vars.spacing },
    minHeight: { ...vars.height, ...vars.spacing },
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    height: { ...vars.height, ...vars.spacing },
    top: ["0"],
    right: ["0"],
    left: ["0"],
    bottom: ["0"],
    inset: ["0"],
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    textDecoration: ["underline", "none", "line-through"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap"],
    zIndex: ["-1", "1"],
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    fontStyle: ["fontSize", "lineHeight"],
    placeItems: ["alignItems", "justifyContent"],
  },
});

export const responsiveSprinklesProperties = defineProperties({
  properties: {
    width: { ...vars.width, ...vars.spacing },
    gridTemplateColumns: vars.gridTemplateColumns,
    display: vars.display,
  },
  conditions: {
    mobile: {},
    tablet: {
      "@media": MEDIA_QUERY_TABLET,
    },
    desktop: {
      "@media": MEDIA_QUERY_DESKTOP,
    },
  },
  defaultCondition: "mobile",
});

export const getSprinkles = createSprinkles(
  sprinklesProperties,
  responsiveSprinklesProperties
);

export type SprinklesArgs = Parameters<typeof getSprinkles>[0];

/**
 * Export subtypes of SprinklesArgs for quickly
 * extending style customisations in components.
 */
export type SprinklesMargin = Pick<
  SprinklesArgs,
  | "margin"
  | "marginX"
  | "marginY"
  | "marginTop"
  | "marginBottom"
  | "marginLeft"
  | "marginRight"
>;

export type SprinklesPadding = Pick<
  SprinklesArgs,
  | "padding"
  | "paddingX"
  | "paddingY"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
>;

export type SprinklesColor = Pick<SprinklesArgs, "color" | "background">;

export type SprinklesSize = Pick<
  SprinklesArgs,
  "width" | "height" | "maxWidth" | "maxHeight" | "minWidth" | "minHeight"
>;
