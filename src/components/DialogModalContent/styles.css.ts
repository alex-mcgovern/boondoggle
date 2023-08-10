import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogContentOuterStyle = style([
  getSprinkles({
    flexGrow: "1",
    overflowY: "auto",
  }),
]);

export const dialogContentInnerStyle = style([
  getSprinkles({
    padding: "spacing_2",
  }),
]);
