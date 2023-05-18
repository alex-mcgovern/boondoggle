import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import * as DialogModalPrimitive from "@radix-ui/react-dialog";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import * as styles from "./dialog_modal.styles.css";

import type { ReactNode } from "react";

export type DialogModalProps = {
  callbackOnOpenChange?: (isOpen: boolean) => void;
  /** DialogModal content */
  children: ReactNode | Array<ReactNode>;
  /** Accessible description for dialog */
  description?: string;
  isOpen?: boolean;
  /** Accessible title for dialog */
  title: string;
  /** Element to use as DialogModal trigger. Note: Must accept a ref. */
  triggerNode: ReactNode;
};

const CLOSE_BUTTON_ICON = <Icon icon={faTimes} />;
export function DialogModal({
  triggerNode,
  title,
  description,
  children,
  isOpen,
  callbackOnOpenChange,
  ...rest
}: DialogModalProps) {
  return (
    <DialogModalPrimitive.Root
      onOpenChange={callbackOnOpenChange}
      open={isOpen}
      {...rest}
    >
      {/**
       * Allow custom trigger node, e.g. menu icon.
       * ToDo: Figure out a way to require triggerNode to accept ref, or to
       * wrap triggerNode so it is always able to accept a ref.
       */}
      <DialogModalPrimitive.Trigger asChild>
        {triggerNode}
      </DialogModalPrimitive.Trigger>

      <DialogModalPrimitive.Portal>
        <DialogModalPrimitive.Overlay className={styles.dialogOverlay} />
        <DialogModalPrimitive.Content className={styles.dialogContent}>
          {/* ——
           * DIALOG HEADER
           * —— */}
          <Box
            alignItems="center"
            borderBottom="border_default"
            display="flex"
            justifyContent="space-between"
            padding="spacing2"
          >
            <DialogModalPrimitive.Title asChild>
              <Box as="h2" fontStyle="body_lg" marginY="none">
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
                slotLeft={CLOSE_BUTTON_ICON}
                type="button"
              />
            </DialogModalPrimitive.Close>
          </Box>

          <Box className={styles.dialogInner}>
            {description && (
              <DialogModalPrimitive.Description>
                {description}
              </DialogModalPrimitive.Description>
            )}

            {children}
          </Box>
        </DialogModalPrimitive.Content>
      </DialogModalPrimitive.Portal>
    </DialogModalPrimitive.Root>
  );
}

export const DialogModalCloseButton = DialogModalPrimitive.Close;
