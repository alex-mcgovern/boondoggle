import { faTimesCircle } from "@fortawesome/sharp-regular-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";

type FieldActionButtonClearProps = {
  /** The function to call when the button is clicked. */
  onClick: () => void;
  /** The size of the field the button is embedded within. */
  size?: ElementSizeEnum;
};

/**
 * A button to clear the contents of a field.
 */
export function FieldActionButtonClear({
  onClick,
  size,
}: FieldActionButtonClearProps) {
  return (
    <FieldActionButton
      name="clear"
      onClick={onClick}
      size={size}
      slot={<Icon icon={faTimesCircle} />}
    />
  );
}
