import { Slot } from "@radix-ui/react-slot";
import { Children } from "react";

import { Box } from "../Box";
import { dialogModalActionsWrapperStyle } from "./styles.css";

import type { useDialogModalState } from "../../lib/useDialogModalState";
import type { ReactNode } from "react";

export type DialogModalActionsProps = {
  actions: ReactNode | [ReactNode?, ReactNode?];
  closeDialog: ReturnType<typeof useDialogModalState>["closeDialog"];
};

export function DialogModalActions({
  actions,
  closeDialog,
}: DialogModalActionsProps) {
  return (
    <Box
      __gridTemplateColumns={`repeat(${Children.count(actions)}, 1fr)`}
      className={dialogModalActionsWrapperStyle}
    >
      {Children.map(actions, (action) => {
        return <Slot onClick={closeDialog}>{action}</Slot>;
      })}
    </Box>
  );
}
