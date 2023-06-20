import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { Slot } from "@radix-ui/react-slot";
import { createRef, forwardRef, useCallback, useState } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useForwardRef } from "../../hooks/use_forward_ref";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { Input } from "../input";
import {
  buttonConfirmTextStyle,
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOuterStyle,
  dialogTitleStyle,
} from "./dialog_modal.styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { BoxProps } from "../box";
import type { ButtonProps } from "../button";
import type { ReactNode, RefObject } from "react";

/** ----------------------------------------------------------------------------- */

export type DialogInfoBulletProps = {
  slotLeft: ReactNode;
  text: string;
};

export function DialogInfoBullet({ slotLeft, text }: DialogInfoBulletProps) {
  return (
    <Box
      alignItems="center"
      display="flex"
      gap="spacing_2"
      marginBottom="spacing_2"
    >
      <Box flexShrink="0" width="spacing_2">
        {slotLeft}
      </Box>
      <Box>{text}</Box>
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */

type DialogButtonProps = Pick<
  DialogModalProps,
  | "dialogButtonOnClick"
  | "dialogConfirmText"
  | "dialogButtonProps"
  | "dialogConfirmText"
  | "dialogButtonText"
  | "dialogConfirmPromptPrefix"
  | "dialogConfirmPromptSuffix"
> & {
  dialogRef: RefObject<HTMLDialogElement>;
};

function DialogButton({
  dialogConfirmText,
  dialogButtonOnClick,
  dialogButtonProps,
  dialogButtonText,
  dialogConfirmPromptPrefix,
  dialogConfirmPromptSuffix,
  dialogRef,
}: DialogButtonProps) {
  const [userConfirmText, setUserConfirmText] = useState("");

  if (dialogConfirmText) {
    return (
      <Box borderTop="border_default" padding="spacing_2">
        <Box className={buttonConfirmTextStyle}>
          <Box as="span">{dialogConfirmPromptPrefix}</Box>{" "}
          <Box as="span" fontWeight="bold">
            {dialogConfirmText}
          </Box>{" "}
          <Box as="span">{dialogConfirmPromptSuffix}</Box>
        </Box>

        <Input
          marginBottom="spacing_2"
          name="dialog_confirm_text"
          placeholder=""
          value={userConfirmText}
          onChange={(e) => {
            return setUserConfirmText(e.target.value);
          }}
        />

        <Button
          appearance="primary"
          disabled={userConfirmText !== dialogConfirmText}
          name="primary_action"
          width="100%"
          onClick={() => {
            dialogButtonOnClick?.();
            dialogRef.current?.close();
          }}
          {...dialogButtonProps}
        >
          {dialogButtonText}
        </Button>
      </Box>
    );
  }

  return (
    <Box borderTop="border_default" padding="spacing_2">
      <Button
        appearance="primary"
        name="primary_action"
        width="100%"
        // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
        onClick={() => {
          dialogButtonOnClick?.();
          dialogRef.current?.close();
        }}
        {...dialogButtonProps}
      >
        {dialogButtonText}
      </Button>
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */

type DialogModalAlertProps = Pick<
  DialogModalProps,
  "alertColor" | "alertDescription" | "alertSlotLeft" | "alertTitle"
>;

function DialogModalAlert({
  alertColor = "amber",
  alertDescription,
  alertSlotLeft,
  alertTitle,
}: DialogModalAlertProps) {
  return (
    <Box
      alignItems="center"
      background="tint_default"
      borderBottom="border_default"
      className={variantColorOverlay[alertColor]}
      display="flex"
      gap="spacing_2"
      padding="spacing_2"
    >
      <Box flexShrink="0" width="spacing_2">
        {alertSlotLeft}
      </Box>
      <Box color="text_low_contrast">
        {alertTitle && <Box fontWeight="semibold">{alertTitle}</Box>}
        {alertDescription}
      </Box>
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */

type DialogCloseButtonProps = {
  dialogRef: RefObject<HTMLDialogElement>;
};

export function DialogCloseButton({ dialogRef }: DialogCloseButtonProps) {
  return (
    <Button
      appearance="ghost"
      aria-label="Close"
      marginLeft="auto"
      name="close"
      size="square"
      slotLeft={<Icon icon={faTimes} />}
      type="button"
      onClick={() => {
        return dialogRef.current?.close();
      }}
    />
  );
}

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
  isOpen?: boolean;
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
      isOpen,
      title,
      triggerNode,
      wrapperProps,
    },
    ref
  ) => {
    const dialogRef = useForwardRef<HTMLDialogElement>(ref);
    const triggerRef = createRef<HTMLElement>();

    /** --------------------------------------------- */

    const toggleIsOpen = useCallback(() => {
      if (!dialogRef.current) {
        return undefined;
      }

      return dialogRef.current?.open
        ? dialogRef.current?.close()
        : dialogRef.current?.showModal();
    }, [dialogRef]);

    /** --------------------------------------------- */

    useClickOutside<HTMLDialogElement, HTMLElement>({
      callback: () => {
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
        >
          <Box className={dialogHeaderStyle}>
            <Box as="h3" className={dialogTitleStyle}>
              {title}
            </Box>

            <DialogCloseButton dialogRef={dialogRef} />
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
            <DialogButton
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
