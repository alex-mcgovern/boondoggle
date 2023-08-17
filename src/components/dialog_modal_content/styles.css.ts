import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogContentOuterStyle = style([
  getSprinkles({
    maxWidth: "100%",
    overflowY: "auto",
    width: "100%",
  }),
  {
    overflowX: "hidden",
  },
]);

export const dialogContentInnerStyle = style([
  getSprinkles({
    height: "100%",
    padding: "space_4",
  }),
]);
