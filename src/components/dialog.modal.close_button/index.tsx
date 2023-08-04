import { faTimes } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../decorative.icon";
import { Button } from "../interactive.button";

type DialogCloseButtonProps = {
  closeDialog: () => void;
};

export function DialogCloseButton({ closeDialog }: DialogCloseButtonProps) {
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
