import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
} from "./common/css_vars_media_queries";
import { vars } from "./theme.css";
import { varsBorder } from "./vars/vars_border.css";
import { varsDisplay } from "./vars/vars_display.css";

const properties = defineProperties({
  properties: {
    alignItems: ["stretch", "start", "center", "end"],
    aspectRatio: vars.aspectRatio,
    boxShadow: vars.boxShadow,
    background: vars.color,
    color: vars.color,
    borderRadius: vars.borderRadius,
    border: varsBorder,
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
  },
});

const responsiveProperties = defineProperties({
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
  properties: {
    display: varsDisplay,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    gridTemplateColumns: vars.gridTemplateColumns,
    gridTemplateRows: vars.gridTemplateColumns,
    width: { ...vars.width, ...vars.spacing },
    height: vars.spacing,
  },
  shorthands: {
    fontStyle: ["fontSize", "lineHeight"],
  },
});

export const getSprinkles = createSprinkles(properties, responsiveProperties);

export type GetSprinklesArgs = Parameters<typeof getSprinkles>[0];
