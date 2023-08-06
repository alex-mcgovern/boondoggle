import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";

import { Button } from "../button";
import { Icon } from "../decorative.icon";
import { inputClearButtonStyle } from "./styles.css";

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
