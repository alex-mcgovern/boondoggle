import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dataTableActionsWrapperStyle = style([
  getSprinkles({
    display: "flex",
    gap: "space_2",
    marginY: "space_5",
  }),
]);
