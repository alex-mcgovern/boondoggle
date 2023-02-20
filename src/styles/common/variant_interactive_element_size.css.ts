import { styleVariants } from "@vanilla-extract/css";
import { getSprinkles } from "../getSprinkles.css";

export const variantInteractiveElementSize = styleVariants({
  sm: [
    getSprinkles({
      fontStyle: { mobile: "body_lg", tablet: "body_sm" },
      height: "spacing3",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: { mobile: "body_lg", tablet: "body_md" },
      height: "spacing4",
    }),
  ],
  lg: [
    getSprinkles({
      fontStyle: { mobile: "body_lg", tablet: "body_lg" },
      height: "spacing5",
    }),
  ],

  sm_square: [
    getSprinkles({
      fontStyle: "body_sm",
      height: "spacing3",
      paddingX: "none",
      paddingY: "spacing1",
      width: "spacing3",
    }),
  ],
  md_square: [
    getSprinkles({
      fontStyle: "body_md",
      height: "spacing4",
      paddingX: "spacing1",
      paddingY: "spacing1",
      width: "spacing4",
    }),
  ],
  lg_square: [
    getSprinkles({
      fontStyle: "body_lg",
      height: "spacing5",
      paddingX: "spacing1",
      paddingY: "spacing1",
      width: "spacing5",
    }),
  ],
});

export type VariantInteractiveElementSizeEnum =
  keyof typeof variantInteractiveElementSize;
