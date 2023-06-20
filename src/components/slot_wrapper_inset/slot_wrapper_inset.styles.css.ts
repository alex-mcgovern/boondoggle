import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const slotSize = styleVariants({
  lg: [getSprinkles({ maxHeight: "spacing_3", maxWidth: "spacing_3" })],
  md: [getSprinkles({ maxHeight: "spacing_2", maxWidth: "spacing_2" })],
  sm: [getSprinkles({ maxHeight: "spacing_1.5", maxWidth: "spacing_1.5" })],
});

export const slotOuterStyle = style([
  getSprinkles({
    alignItems: "center",
    bottom: "0",
    color: "inherit",
    display: "flex",
    flexShrink: "0",
    height: "100%",
    justifyContent: "center",

    position: "absolute",
    top: "0",
    width: "spacing_5",
  }),
]);

export const getSlotInnerStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }),
  ],
  variants: { size: slotSize },
});

export const offsetSlotRightStyle = style({
  paddingRight: `${vars.spacing.spacing_4} !important`,
});

export const offsetSlotLeftStyle = style({
  paddingLeft: `${vars.spacing.spacing_4} !important`,
});
