import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const slotSize = styleVariants({
  lg: [getSprinkles({ maxHeight: "spacing_3", maxWidth: "spacing_3" })],
  md: [getSprinkles({ maxHeight: "spacing_2", maxWidth: "spacing_2" })],
  sm: [getSprinkles({ maxHeight: "spacing_1.5", maxWidth: "spacing_1.5" })],
});

export const getSlotStyles = recipe({
  base: [
    {
      pointerEvents: "none",
    },
    getSprinkles({
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      maxHeight: "spacing_3",
      maxWidth: "spacing_3",
    }),
  ],
  variants: {
    size: slotSize,
  },
});
