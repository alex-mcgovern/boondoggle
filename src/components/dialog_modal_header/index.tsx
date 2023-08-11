import { Box } from "../box_comp";
import { DialogModalCloseButton } from "../dialog_modal_close_button";
import { dialogHeaderStyle, dialogTitleStyle } from "./styles.css";

import type { useDialogModalState } from "../../lib/useDialogModalState";

type DialogModalHeaderProps = {
  closeDialog: ReturnType<typeof useDialogModalState>["closeDialog"];
  title: string;
};

export function DialogModalHeader({
  closeDialog,
  title,
}: DialogModalHeaderProps) {
  return (
    <Box className={dialogHeaderStyle}>
      <Box as="h3" className={dialogTitleStyle}>
        {title}
      </Box>

      <DialogModalCloseButton closeDialog={closeDialog} />
    </Box>
  );
}
