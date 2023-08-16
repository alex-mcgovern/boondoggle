import { faCheck, faCopy } from "@fortawesome/sharp-regular-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

type FieldActionButtonCopyProps = {
  /** Whether the user has just copied tha value of the field or not. */
  isCopied?: boolean;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to copy the contents of a field.
 */
export function FieldActionButtonCopy({
  isCopied,
  onClick,
  size,
}: FieldActionButtonCopyProps) {
  return (
    <FieldActionButton
      colorOverlay={isCopied ? "green" : undefined}
      name="copy"
      onClick={onClick}
      size={size}
      slot={<Icon icon={isCopied ? faCheck : faCopy} />}
    />
  );
}
