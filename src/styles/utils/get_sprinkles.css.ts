import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
} from "../common/common.media_queries.css";
import { vars } from "../theme.css";
import { varsBorder } from "../vars/vars_border.css";
import { varsDisplay } from "../vars/vars_display.css";

/** -----------------------------------------------------------------------------
 * Util function for extracting color vars for use with a sprinkles property
 * ------------------------------------------------------------------------------- */

export const sprinklesProperties = defineProperties({
  properties: {
    aspectRatio: vars.aspectRatio,
    boxShadow: vars.boxShadow,

    /** Border radius */
    borderRadius: vars.borderRadius,

    /** Border */
    border: varsBorder,
    borderRight: varsBorder,
    borderLeft: varsBorder,
    borderBottom: varsBorder,
    borderTop: varsBorder,

    /** Color  */
    background: {
      ...vars.color.background,
      ...vars.color.button,
      ...vars.color.surface,
      ...vars.color.tint,
    },
    color: { ...vars.color.text, ...vars.color.neutral },

    /** Flex * Grid */
    alignItems: ["stretch", "start", "center", "end"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    flexShrink: ["0"],
    gap: vars.spacing,
    justifyContent: [
      "stretch",
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
    ],

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
    textDecoration: ["underline", "none"],
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
    display: varsDisplay,
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

/** -----------------------------------------------------------------------------
 * Export subtypes of SprinklesArgs for quickly
 * extending style customisations in components.
 * ------------------------------------------------------------------------------- */

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
