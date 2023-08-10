import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getDialogModalAlertWrapperStyles = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      background: "tint_default",
      borderBottom: "border_default",
      display: "flex",
      gap: "spacing_2",
      padding: "spacing_2",
    }),
  ],
  variants: {
    colorOverlay: variantColorOverlay,
  },
});

export const dialogModalAlertSlotStyle = style([
  getSprinkles({
    color: "text_low_contrast",
    flexShrink: "0",
    width: "spacing_2",
  }),
]);
