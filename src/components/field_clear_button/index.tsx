import { faTimesCircle } from "@fortawesome/sharp-regular-svg-icons";

import { Button } from "../button";
import { Icon } from "../icon";
import { inputClearButtonStyle } from "./styles.css";

type FieldClearButtonProps = {
  onClick: () => void;
};

export function FieldClearButton({ onClick }: FieldClearButtonProps) {
  return (
    <Button
      appearance="ghost"
      className={inputClearButtonStyle}
      name="clear"
      onClick={onClick}
      size="square_sm"
      slotLeft={<Icon icon={faTimesCircle} />}
      type="button"
    />
  );
}
