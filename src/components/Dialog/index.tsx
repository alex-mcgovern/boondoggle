import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

import { Box } from "../Box";
import { Button } from "../button/Button";
import * as styles from "./dialog.css";

import type { ReactNode } from "react";

export interface DialogProps {
  /** Element to use as Dialog trigger. Note: Must accept a ref. */
  triggerNode: ReactNode;
  /** Accessible title for dialog */
  title: string;
  /** Accessible description for dialog */
  description: string;
  /** Dialog content */
  children: ReactNode | Array<ReactNode>;
  callbackOnOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

export function Dialog({
  triggerNode,
  title,
  description,
  children,
  isOpen,
  callbackOnOpenChange,
  ...rest
}: DialogProps) {
  return (
    <DialogPrimitive.Root
      onOpenChange={callbackOnOpenChange}
      open={isOpen}
      {...rest}
    >
      {/**
       * Allow custom trigger node, e.g. menu icon.
       * ToDo: Figure out a way to require triggerNode to accept ref, or to
       * wrap triggerNode so it is always able to accept a ref.
       */}
      <DialogPrimitive.Trigger asChild>{triggerNode}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.dialogOverlay} />
        <DialogPrimitive.Content className={styles.dialogContent}>
          {/* ---------------------------------------------——
           * DIALOG HEADER
           * ---------------------------------------------—— */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <DialogPrimitive.Title asChild>
              <Box as="h2" fontStyle="h4" marginY="none">
                {title}
              </Box>
            </DialogPrimitive.Title>

            <DialogPrimitive.Close asChild>
              <Button
                name="close"
                size="md_square"
                appearance="secondary"
                iconLeft={faTimes}
                aria-label="Close"
                type="button"
                width="100%"
              />
            </DialogPrimitive.Close>
          </Box>

          <DialogPrimitive.Description>
            {description}
          </DialogPrimitive.Description>

          {/* ---------------------------------------------——
           * DIALOG CONTENT
           * ---------------------------------------------—— */}

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const DialogCloseButton = DialogPrimitive.Close;
