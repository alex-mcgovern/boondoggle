import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const slotSize = styleVariants({
  lg: [getSprinkles({ height: "spacing_3", width: "spacing_3" })],
  md: [getSprinkles({ height: "spacing_2", width: "spacing_2" })],
  sm: [getSprinkles({ height: "spacing_1.5", width: "spacing_1.5" })],
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
    }),
  ],
  variants: {
    size: slotSize,
  },
});
