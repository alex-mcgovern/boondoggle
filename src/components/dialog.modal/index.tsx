import { Slot } from "@radix-ui/react-slot";
import { createRef, forwardRef, useCallback } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useForwardRef } from "../../hooks/use_forward_ref";
import { Box } from "../core.box";
import { DialogModalActionConfirm } from "../dialog.modal.actions";
import { DialogModalAlert } from "../dialog.modal.alert";
import { DialogCloseButton } from "../dialog.modal.close_button";
import {
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOuterStyle,
  dialogTitleStyle,
} from "./styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { ButtonProps } from "../button";
import type { BoxProps } from "../core.box";
import type { ReactNode } from "react";

/** ----------------------------------------------------------------------------- */

export type DialogModalProps = {
  alertColor?: ColorOverlay;
  alertDescription?: string;
  alertSlotLeft?: ReactNode;
  alertTitle?: string;
  children: ReactNode | Array<ReactNode>;
  dialogButtonOnClick?: () => void;
  dialogButtonProps?: Omit<ButtonProps, "onClick">;
  dialogButtonText?: string;
  dialogConfirmPromptPrefix?: string;
  dialogConfirmPromptSuffix?: string;
  dialogConfirmText?: string;
  dialogProps?: BoxProps;
  isOpen?: boolean;
  onIsOpenChange?: (isOpen: boolean) => void;
  title: string;
  triggerNode: ReactNode;
  wrapperProps?: BoxProps;
};

export const DialogModal = forwardRef<HTMLDialogElement, DialogModalProps>(
  (
    {
      alertColor,
      alertDescription,
      alertSlotLeft,
      alertTitle,
      children,
      dialogButtonOnClick,
      dialogButtonProps,
      dialogButtonText,
      dialogConfirmPromptPrefix = "Please type",
      dialogConfirmPromptSuffix = "to continue",
      dialogConfirmText,
      dialogProps,
      isOpen,
      onIsOpenChange,
      title,
      triggerNode,
      wrapperProps,
    },
    ref
  ) => {
    const dialogRef = useForwardRef<HTMLDialogElement>(ref);
    const triggerRef = createRef<HTMLElement>();

    /** --------------------------------------------- */

    const openDialog = useCallback(() => {
      onIsOpenChange?.(true);
      return dialogRef.current?.showModal();
    }, [dialogRef, onIsOpenChange]);

    const closeDialog = useCallback(() => {
      onIsOpenChange?.(false);
      return dialogRef.current?.close();
    }, [dialogRef, onIsOpenChange]);

    /** --------------------------------------------- */

    const toggleIsOpen = useCallback(() => {
      if (!dialogRef.current) {
        return null;
      }

      return dialogRef.current?.open ? closeDialog() : openDialog();
    }, [closeDialog, dialogRef, openDialog]);

    /** --------------------------------------------- */

    useClickOutside<HTMLDialogElement, HTMLElement>({
      callback: () => {
        if (onIsOpenChange) {
          onIsOpenChange?.(false);
        }
        return dialogRef.current?.close();
      },
      contentRef: dialogRef,
      triggerRef,
    });

    /** --------------------------------------------- */

    return (
      <Box position="relative" {...wrapperProps}>
        <Slot onClick={toggleIsOpen} ref={triggerRef}>
          {triggerNode}
        </Slot>

        <Box
          as="dialog"
          className={dialogOuterStyle}
          open={isOpen}
          ref={dialogRef}
          {...dialogProps}
        >
          <Box className={dialogHeaderStyle}>
            <Box as="h3" className={dialogTitleStyle}>
              {title}
            </Box>

            <DialogCloseButton closeDialog={closeDialog} />
          </Box>

          <Box className={dialogContentStyle}>
            {alertTitle && (
              <DialogModalAlert
                alertColor={alertColor}
                alertDescription={alertDescription}
                alertSlotLeft={alertSlotLeft}
                alertTitle={alertTitle}
              />
            )}
            <Box padding="spacing_2">{children}</Box>
          </Box>

          {dialogButtonText && (
            <DialogModalActionConfirm
              dialogButtonOnClick={dialogButtonOnClick}
              dialogButtonProps={dialogButtonProps}
              dialogButtonText={dialogButtonText}
              dialogConfirmPromptPrefix={dialogConfirmPromptPrefix}
              dialogConfirmPromptSuffix={dialogConfirmPromptSuffix}
              dialogConfirmText={dialogConfirmText}
              dialogRef={dialogRef}
            />
          )}
        </Box>
      </Box>
    );
  }
);
