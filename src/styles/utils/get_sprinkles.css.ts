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
    alignItems: ["stretch", "start", "center", "end"],
    aspectRatio: vars.aspectRatio,
    background: {
      ...vars.color.accent.background,
      ...vars.color.neutral.background,
      ...vars.color.semanticGreen.background,
      ...vars.color.semanticRed.background,
    },
    color: {
      ...vars.color.accent.text,
    },
    borderRadius: vars.borderRadius,
    border: {
      accent_nonInteractive: `1px solid ${vars.color.accent.border.nonInteractive}`,
      accent_border_interactive: `1px solid ${vars.color.accent.border.interactive}`,
      accent_border_interactiveActive: `1px solid ${vars.color.accent.border.interactiveActive}`,
      neutral_nonInteractive: `1px solid ${vars.color.neutral.border.nonInteractive}`,
      neutral_border_interactive: `1px solid ${vars.color.neutral.border.interactive}`,
      neutral_border_interactiveActive: `1px solid ${vars.color.neutral.border.interactiveActive}`,
    },
    boxShadow: vars.boxShadow,
    borderRight: varsBorder,
    borderLeft: varsBorder,
    borderBottom: varsBorder,
    borderTop: varsBorder,
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    flexShrink: ["0"],
    fontWeight: vars.fontWeight,
    isolation: ["isolate"],
    gap: vars.spacing,
    justifyContent: [
      "stretch",
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
    ],

    margin: vars.spacing,
    padding: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: vars.spacing,
    maxWidth: vars.width,
    minWidth: { ...vars.width, ...vars.spacing },
    minHeight: vars.height,
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    gridTemplateColumns: vars.gridTemplateColumns,
    gridTemplateRows: vars.gridTemplateColumns,
    height: vars.spacing,
    top: ["0"],
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
  },
});

export const responsiveSprinklesProperties = defineProperties({
  properties: {
    width: { ...vars.width, ...vars.spacing },
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
