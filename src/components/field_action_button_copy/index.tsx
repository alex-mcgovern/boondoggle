import { faCheck, faCopy } from "@fortawesome/sharp-regular-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";

type FieldActionButtonCopyProps = {
  /** Whether the user has just copied tha value of the field or not. */
  isCopied?: boolean;
  /** The function to call when the button is clicked. */
  onClick: () => void;
  /** The size of the field the button is embedded within. */
  size?: ElementSizeEnum;
};

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
      name="copy"
      onClick={onClick}
      size={size}
      slot={<Icon icon={isCopied ? faCheck : faCopy} />}
    />
  );
}
