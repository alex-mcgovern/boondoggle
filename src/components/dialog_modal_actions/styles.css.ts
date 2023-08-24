import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogModalActionsWrapperStyle = style([
  getSprinkles({
    borderTop: "border_default",
    display: "grid",
    gap: "space_2",
    marginTop: "auto",
    padding: "space_4",
  }),
]);
