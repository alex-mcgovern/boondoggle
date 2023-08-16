import { Button } from "../button";
import { getActionButtonSize } from "./lib/get_action_button_size";
import { fieldActionButtonStyle } from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ReactNode } from "react";

type FieldActionButtonProps = {
  /** The name of the button. */
  name: string;
  /** The function to call when the button is clicked. */
  onClick: () => void;
  /** The size of the field the button is embedded within. */
  size?: ElementSizeEnum;
  /** The slot to render on the button. */
  slot: ReactNode;
};

/**
 * A configurable button for use within a field.
 */
export function FieldActionButton({
  name,
  onClick,
  size = "md",
  slot,
}: FieldActionButtonProps) {
  return (
    <Button
      appearance="ghost"
      className={fieldActionButtonStyle}
      name={name}
      onClick={onClick}
      size={getActionButtonSize(size)}
      slotLeft={slot}
      type="button"
    />
  );
}
