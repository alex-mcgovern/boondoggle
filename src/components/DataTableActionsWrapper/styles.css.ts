import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dataTableActionsWrapperStyle = style([
  getSprinkles({
    display: "flex",
    gap: "spacing_1",
    padding: "spacing_2",
  }),
  {
    borderLeft: `1px solid ${vars.color.border_default}`,
    borderRight: `1px solid ${vars.color.border_default}`,
    borderTop: `1px solid ${vars.color.border_default}`,
    borderTopLeftRadius: vars.borderRadius.md,
    borderTopRightRadius: vars.borderRadius.md,
  },
]);
