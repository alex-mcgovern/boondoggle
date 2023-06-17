import { faTimes } from "@fortawesome/pro-light-svg-icons";
import * as DialogModalPrimitive from "@radix-ui/react-dialog";
import { type ReactNode, useState } from "react";

import {
  type ColorOverlay,
  variantColorOverlay,
} from "../../styles/color_palette.css";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { Input } from "../input";
import {
  buttonConfirmTextStyle,
  dialogContentStyle,
  dialogInnerStyle,
  dialogOverlayStyle,
} from "./dialog_modal.styles.css";

import type { ButtonProps } from "../button";

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
>;

function DialogButton({
  dialogConfirmText,
  dialogButtonOnClick,
  dialogButtonProps,
  dialogButtonText,
  dialogConfirmPromptPrefix,
  dialogConfirmPromptSuffix,
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

        <DialogModalPrimitive.Close asChild>
          <Button
            appearance="primary"
            disabled={userConfirmText !== dialogConfirmText}
            name="primary_action"
            onClick={dialogButtonOnClick}
            width="100%"
            {...dialogButtonProps}
          >
            {dialogButtonText}
          </Button>
        </DialogModalPrimitive.Close>
      </Box>
    );
  }

  return (
    <Box borderTop="border_default" padding="spacing_2">
      <DialogModalPrimitive.Close asChild>
        <Button
          appearance="primary"
          name="primary_action"
          onClick={dialogButtonOnClick}
          width="100%"
          {...dialogButtonProps}
        >
          {dialogButtonText}
        </Button>
      </DialogModalPrimitive.Close>
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
      <Box>
        {alertTitle && (
          <Box color="text_low_contrast" fontWeight="semibold">
            {alertTitle}
          </Box>
        )}
        {alertDescription}
      </Box>
    </Box>
  );
}

/** ----------------------------------------------------------------------------- */

export type DialogModalProps = {
  alertColor?: ColorOverlay;
  alertDescription?: string;
  alertSlotLeft?: ReactNode;
  alertTitle?: string;
  callbackOnOpenChange?: (isOpen: boolean) => void;
  children: ReactNode | Array<ReactNode>;
  description?: string;
  dialogButtonOnClick?: () => void;
  dialogButtonProps?: Omit<ButtonProps, "onClick">;
  dialogButtonText?: string;
  dialogConfirmPromptPrefix?: string;
  dialogConfirmPromptSuffix?: string;
  dialogConfirmText?: string;
  isOpen?: boolean;
  title: string;
  triggerNode: ReactNode;
};

export function DialogModal({
  alertColor,
  alertDescription,
  alertSlotLeft,
  alertTitle,
  callbackOnOpenChange,
  children,
  description,
  dialogButtonOnClick,
  dialogButtonProps,
  dialogButtonText,
  dialogConfirmPromptPrefix = "Please type",
  dialogConfirmPromptSuffix = "to continue",
  dialogConfirmText,
  isOpen,
  title,
  triggerNode,
  ...rest
}: DialogModalProps) {
  return (
    <DialogModalPrimitive.Root
      onOpenChange={callbackOnOpenChange}
      open={isOpen}
      {...rest}
    >
      <DialogModalPrimitive.Trigger asChild>
        {triggerNode}
      </DialogModalPrimitive.Trigger>

      {/** ---------------------------------------------------------------------------- */}

      <DialogModalPrimitive.Portal>
        <DialogModalPrimitive.Overlay className={dialogOverlayStyle} />
        <DialogModalPrimitive.Content className={dialogContentStyle}>
          <Box
            alignItems="center"
            borderBottom="border_default"
            display="flex"
            justifyContent="space-between"
            padding="spacing_2"
          >
            <DialogModalPrimitive.Title asChild>
              <Box
                as="h2"
                fontStyle="body_md"
                fontWeight="semibold"
                marginY="none"
              >
                {title}
              </Box>
            </DialogModalPrimitive.Title>

            <DialogModalPrimitive.Close asChild>
              <Button
                appearance="ghost"
                aria-label="Close"
                flexGrow="0"
                marginLeft="auto"
                name="close"
                size="square"
                slotLeft={<Icon icon={faTimes} />}
                type="button"
              />
            </DialogModalPrimitive.Close>
          </Box>

          <Box className={dialogInnerStyle}>
            {alertTitle && (
              <DialogModalAlert
                alertColor={alertColor}
                alertDescription={alertDescription}
                alertSlotLeft={alertSlotLeft}
                alertTitle={alertTitle}
              />
            )}

            <Box padding="spacing_2">
              {description && (
                <DialogModalPrimitive.Description>
                  {description}
                </DialogModalPrimitive.Description>
              )}
              {children}
            </Box>
          </Box>

          {dialogButtonText && (
            <DialogButton
              dialogButtonOnClick={dialogButtonOnClick}
              dialogButtonProps={dialogButtonProps}
              dialogButtonText={dialogButtonText}
              dialogConfirmPromptPrefix={dialogConfirmPromptPrefix}
              dialogConfirmPromptSuffix={dialogConfirmPromptSuffix}
              dialogConfirmText={dialogConfirmText}
            />
          )}
        </DialogModalPrimitive.Content>
      </DialogModalPrimitive.Portal>
    </DialogModalPrimitive.Root>
  );
}

export const DialogModalCloseButton = DialogModalPrimitive.Close;
