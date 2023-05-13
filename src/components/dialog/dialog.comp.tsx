import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { createRef, forwardRef, useCallback } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useEnterWhileFocused } from "../../hooks/use_enter_while_focused";
import { a11yFocus } from "../../styles/common/a11y.css";
import { animateAppear } from "../../styles/common/animations.css";
import { Box } from "../box";

import type { BoxProps } from "../box";
import type { LegacyRef, ReactNode } from "react";

export type DialogProps = {
  children?: ReactNode;
  className?: string;
  dialogProps?: BoxProps;
  isOpen?: boolean;
  onIsOpenChange?: (isOpen?: boolean) => void;
  triggerNode?: ReactNode;
  wrapperProps?: BoxProps;
};

export const Dialog = forwardRef(
  (
    {
      children,
      className: userClassName,
      isOpen: controlledIsOpen,
      onIsOpenChange,
      triggerNode,
      wrapperProps,
      dialogProps,
    }: DialogProps,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    const dialogRef = createRef<HTMLDialogElement>();
    const triggerRef = createRef<HTMLElement>();

    /**
     * Callback for when the input is clicked or focused.
     */
    const toggleIsOpen = useCallback(() => {
      if (!dialogRef.current) {
        return undefined;
      }

      return (
        dialogRef.current?.open
          ? dialogRef.current?.close()
          : dialogRef.current?.show(),
        onIsOpenChange?.(dialogRef.current?.open)
      );
    }, [dialogRef, onIsOpenChange]);

    /**
     * When input is focused and user presses enter, open the date picker.
     */
    useEnterWhileFocused<HTMLElement>({
      callback: toggleIsOpen,
      triggerRef,
    });

    /**
     * Handle click outside dialog
     */
    useClickOutside<HTMLDialogElement, HTMLElement>({
      callback: () => {
        return dialogRef.current?.close();
      },
      contentRef: dialogRef,
      triggerRef,
    });

    return (
      <Box position="relative" ref={ref} {...wrapperProps}>
        <Slot onClick={toggleIsOpen} ref={triggerRef}>
          {triggerNode}
        </Slot>
        <Box
          as="dialog"
          background="background"
          border="border_default"
          borderRadius="md"
          className={clsx(animateAppear, userClassName, a11yFocus)}
          marginTop="spacing1"
          open={controlledIsOpen}
          padding="none"
          position="absolute"
          ref={dialogRef}
          zIndex="1"
          {...dialogProps}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
