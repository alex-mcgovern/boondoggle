import { FieldActionButtonClear } from "../../../field_action_button_clear";

import type { ReactNode } from "react";

type GetSlotRightArgs = {
  /** Whether the user can clear the input. */
  canClear: boolean;
  /** Callback to reset the select state. */
  reset: () => void;
  /** The slotRight node. */
  slotRight: [ReactNode?, ReactNode?, ReactNode?];
};

/**
 * Get the slotRight node.
 */
export const getSlotRight = ({
  canClear,
  reset,
  slotRight,
}: GetSlotRightArgs): [ReactNode?, ReactNode?, ReactNode?] => {
  if (canClear) {
    return [<FieldActionButtonClear onClick={reset} />];
  }

  return [slotRight];
};
