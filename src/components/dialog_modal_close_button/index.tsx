import { faTimes } from "@fortawesome/pro-light-svg-icons";

import { Button } from "../button";
import { Icon } from "../icon";

export type DialogModalCloseButtonProps = {
  closeDialog: () => void;
};

export function DialogModalCloseButton({
  closeDialog,
}: DialogModalCloseButtonProps) {
  return (
    <Button
      appearance="ghost"
      aria-label="Close"
      marginLeft="auto"
      name="close"
      onClick={closeDialog}
      size="square_md"
      slotLeft={<Icon icon={faTimes} />}
      type="button"
    />
  );
}
