import { faTimes } from "@fortawesome/pro-light-svg-icons";

import { Button } from "../button";
import { Icon } from "../decorative.icon";

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
