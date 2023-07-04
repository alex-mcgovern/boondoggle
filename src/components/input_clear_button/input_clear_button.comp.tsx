import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../icon";
import { inputClearButtonStyle } from "./input_clear_button.styles.css";

type InputClearButtonProps = {
  onClick: () => void;
};

export function InputClearButton({ onClick }: InputClearButtonProps) {
  return (
    <button className={inputClearButtonStyle} onClick={onClick} type="button">
      <Icon icon={faTimesCircle} />
    </button>
  );
}
