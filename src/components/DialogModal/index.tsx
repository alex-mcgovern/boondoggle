import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { useDialogModalState } from "../../lib/useDialogModalState";
import { Box } from "../Box";
import { DialogModalActions } from "../DialogModalActionsWrapper";
import { DialogModalContent } from "../DialogModalContent";
import { DialogModalHeader } from "../DialogModalHeader";
import { DialogModalInner } from "../DialogModalInner";
import { DialogModalOuter } from "../DialogModalOuter";

import type { BoxProps } from "../Box";
import type { DialogModalActionsProps } from "../DialogModalActionsWrapper";
import type { DialogModalInnerWidth } from "../DialogModalInner/styles.css";
import type { ReactNode } from "react";

export type DialogModalProps = {
  actions?: DialogModalActionsProps["actions"];
  alert: ReactNode;
  children: ReactNode | Array<ReactNode>;
  title: string;
  triggerNode: ReactNode;
  width?: DialogModalInnerWidth;
  wrapperProps?: BoxProps;
};

export const DialogModal = forwardRef<HTMLDialogElement, DialogModalProps>(
  (
    { actions, alert, children, title, triggerNode, width, wrapperProps },
    ref
  ) => {
    const { closeDialog, dialogRef, toggleIsOpen, triggerRef } =
      useDialogModalState({ ref });

    /** --------------------------------------------- */

    return (
      <Box position="relative" {...wrapperProps}>
        <Slot onClick={toggleIsOpen} ref={triggerRef}>
          {triggerNode}
        </Slot>

        <DialogModalOuter dialogRef={dialogRef}>
          <DialogModalInner width={width}>
            <DialogModalHeader closeDialog={closeDialog} title={title} />
            <DialogModalContent alert={alert}>{children}</DialogModalContent>
            {actions && (
              <DialogModalActions actions={actions} closeDialog={closeDialog} />
            )}
          </DialogModalInner>
        </DialogModalOuter>
      </Box>
    );
  }
);
