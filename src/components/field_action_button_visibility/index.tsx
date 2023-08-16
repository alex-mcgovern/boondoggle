import { faEye, faEyeSlash } from "@fortawesome/sharp-regular-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";

type FieldActionButtonVisibilityProps = {
  /** Whether the value of the field is visible or not. */
  isVisible?: boolean;
  /** The function to call when the button is clicked. */
  onClick: () => void;
  /** The size of the field the button is embedded within. */
  size?: ElementSizeEnum;
};

/**
 * A button to toggle the visiblity of a field value.
 */
export function FieldActionButtonVisibility({
  isVisible,
  onClick,
  size,
}: FieldActionButtonVisibilityProps) {
  return (
    <FieldActionButton
      name="visibility"
      onClick={onClick}
      size={size}
      slot={<Icon icon={isVisible ? faEyeSlash : faEye} />}
    />
  );
}
