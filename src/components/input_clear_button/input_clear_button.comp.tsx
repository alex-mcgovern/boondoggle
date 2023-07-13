import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";

import { Button } from "../button";
import { Icon } from "../icon";
import { inputClearButtonStyle } from "./input_clear_button.styles.css";

type InputClearButtonProps = {
  onClick: () => void;
};

export function InputClearButton({ onClick }: InputClearButtonProps) {
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
