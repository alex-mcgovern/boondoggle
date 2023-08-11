import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";

import { Button } from "../button_comp";
import { Icon } from "../icon_comp";
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
