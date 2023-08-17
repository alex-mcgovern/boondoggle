import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const slotSize = styleVariants({
  lg: [getSprinkles({ height: "space_6", width: "space_6" })],
  md: [getSprinkles({ height: "space_4", width: "space_4" })],
  sm: [getSprinkles({ height: "space_3", width: "space_3" })],
});

export const getSlotStyles = recipe({
  base: [
    {
      pointerEvents: "none",
    },
    getSprinkles({
      alignItems: "center",
      color: "text_low_contrast",
      display: "flex",
      justifyContent: "center",
    }),
  ],
  variants: {
    size: slotSize,
  },
});
