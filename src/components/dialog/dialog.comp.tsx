import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { createRef, forwardRef, useCallback } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useEnterWhileFocused } from "../../hooks/use_enter_while_focused";
import { animateAppear } from "../../styles/common/animations.css";
import { Box } from "../box";

import type { LegacyRef, ReactNode } from "react";

export type DialogProps = {
  isOpen?: boolean;
  triggerNode?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export const Dialog = forwardRef(
  (
    {
      className: userClassName,
      triggerNode,
      children,
      isOpen: controlledIsOpen,
      ...rest
    }: DialogProps,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    const dialogRef = createRef<HTMLDialogElement>();
    const triggerRef = createRef<HTMLElement>();

    /**
     * Callback for when the input is clicked or focused.
     */
    const toggleIsOpen = useCallback(() => {
      return dialogRef.current?.open
        ? dialogRef.current?.close()
        : dialogRef.current?.show();
    }, [dialogRef]);

    /**
     * When input is focused and user presses enter, open the date picker.
     */
    useEnterWhileFocused<HTMLElement>({
      triggerRef,
      callback: toggleIsOpen,
    });

    /**
     * Handle click outside dialog
     */
    useClickOutside<HTMLDialogElement, HTMLElement>({
      contentRef: dialogRef,
      triggerRef,
      callback: () => {
        return dialogRef.current?.close();
      },
    });

    return (
      <Box position="relative" ref={ref}>
        <Slot onClick={toggleIsOpen} ref={triggerRef}>
          {triggerNode}
        </Slot>
        <Box
          ref={dialogRef}
          open={controlledIsOpen}
          className={clsx(animateAppear, userClassName)}
          marginTop="spacing1"
          as="dialog"
          {...rest}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
