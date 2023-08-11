import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dataTablePaginationWrapperStyle = style([
  getSprinkles({
    display: "flex",
    gap: "spacing_1",
    padding: "spacing_2",
  }),
  {
    borderBottom: `1px solid ${vars.color.border_default}`,
    borderBottomLeftRadius: vars.borderRadius.md,
    borderBottomRightRadius: vars.borderRadius.md,
    borderLeft: `1px solid ${vars.color.border_default}`,
    borderRight: `1px solid ${vars.color.border_default}`,
  },
]);
