import { exhaustiveSwitchGuard } from "../../../lib/exhaustive_switch_guard";

import type { ElementSizeEnum } from "../../../styles/common/element_size.css";
import type { ButtonProps } from "../../button";

/**
 * Translates the `size` prop from a field to a slightly smaller size prop for the action button.
 */
export function getActionButtonSize(
  size: ElementSizeEnum
): ButtonProps["size"] {
  switch (size) {
    case "lg":
      return "square_md";
    case "md":
      return "square_sm";
    case "sm":
      return "square_xs";
    default:
      return exhaustiveSwitchGuard(size);
  }
}
