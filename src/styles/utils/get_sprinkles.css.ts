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
    alignItems: ["stretch", "start", "center", "end", "baseline"],
    aspectRatio: vars.aspectRatio,
    background: {
      ...vars.color,
      inherit: "inherit",
      transparent: "transparent",
    },
    border: {
      border_active: `1px solid ${vars.color.border_active}`,
      border_default: `1px solid ${vars.color.border_default}`,
    },
    borderBottom: vars.border,
    borderLeft: vars.border,
    borderRadius: vars.borderRadius,
    borderRight: vars.border,
    borderTop: vars.border,
    bottom: ["0"],
    boxShadow: vars.boxShadow,
    color: { ...vars.color, currentColor: "currentColor", inherit: "inherit" },
    flex: ["0 1 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
    flexGrow: ["0", "1"],
    flexShrink: ["0", "1"],
    flexWrap: ["wrap", "nowrap"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    height: { ...vars.height, ...vars.spacing },
    inset: ["0"],
    isolation: ["isolate"],
    justifyContent: [
      "stretch",
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
    ],
    left: ["0"],
    lineHeight: vars.lineHeight,
    margin: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: { ...vars.height, ...vars.spacing },
    maxWidth: { ...vars.width, ...vars.spacing },
    minHeight: { ...vars.height, ...vars.spacing },
    minWidth: { ...vars.width, ...vars.spacing },
    overflow: ["hidden"],
    overflowY: ["auto"],
    right: ["0"],
    textAlign: ["center", "left", "right"],
    textDecoration: ["underline", "none", "line-through"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    top: ["0"],
    whiteSpace: ["nowrap", "normal"],
    zIndex: ["-1", "1"],
  },
  shorthands: {
    fontStyle: ["fontSize", "lineHeight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyContent"],
  },
});

export const responsiveSprinklesProperties = defineProperties({
  /**
   * Note, the ordering of conditions is important
   */
  conditions: {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    mobile: {},
    tablet: {
      "@media": MEDIA_QUERY_TABLET,
    },
    desktop: {
      "@media": MEDIA_QUERY_DESKTOP,
    },
    /* eslint-enable sort-keys-fix/sort-keys-fix */
  },
  defaultCondition: "mobile",
  properties: {
    display: vars.display,
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    gap: vars.spacing,
    gridTemplateColumns: vars.gridTemplateColumns,
    padding: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    position: ["relative", "absolute", "sticky"],
    width: { ...vars.width, ...vars.spacing },
  },
  shorthands: {
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
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
