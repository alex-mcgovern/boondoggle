import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { useDialogModalState } from "../../lib/use_dialog_modal_state";
import { Box } from "../box";
import { DialogModalActions } from "../dialog_modal_actions";
import { DialogModalContent } from "../dialog_modal_content";
import { DialogModalHeader } from "../dialog_modal_header";
import { DialogModalInner } from "../dialog_modal_inner";
import { DialogModalOuter } from "../dialog_modal_outer";

import type { BoxProps } from "../box";
import type { DialogModalActionsProps } from "../dialog_modal_actions";
import type { DialogModalInnerWidth } from "../dialog_modal_inner/styles.css";
import type { ReactNode } from "react";

export type DialogModalProps = {
  actions?: DialogModalActionsProps["actions"];
  alert?: ReactNode;
  children: ReactNode | Array<ReactNode>;
  title: string;
  triggerNode?: ReactNode;
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

            {/* Scrollable dialog modal content */}
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
