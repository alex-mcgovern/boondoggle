import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { createRef, forwardRef, useCallback } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useForwardRef } from "../../hooks/use_forward_ref";
import { useOpenDialogWithKeyboard } from "../../hooks/use_open_dialog_with_keyboard";
import { Box } from "../core.box";
import { dialogContentStyles, getDialogStyles } from "./styles.css";

import type { BoxProps } from "../core.box";
import type { DialogPlacementEnum } from "./styles.css";
import type { ReactNode } from "react";

export type DialogProps = BoxProps & {
  children?: ReactNode;
  className?: string;
  inert?: boolean;
  isOpen?: boolean;
  onIsOpenChange?: (isOpen?: boolean) => void;
  openOn?: "click" | "hover";
  placement?: DialogPlacementEnum;
  preventOpenOnKeydown?: boolean;
  triggerNode?: ReactNode;
  wrapperProps?: BoxProps;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      children,
      className: userClassName,
      isOpen: controlledIsOpen,
      onIsOpenChange,
      openOn = "click",
      placement,
      preventOpenOnKeydown = false,
      triggerNode,
      wrapperProps,
      ...rest
    }: DialogProps,
    ref
  ) => {
    const dialogRef = useForwardRef<HTMLDialogElement>(ref);
    const triggerRef = createRef<HTMLElement>();

    /** --------------------------------------------- */

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

    /** --------------------------------------------- */

    useOpenDialogWithKeyboard<HTMLElement>({
      callback: toggleIsOpen,
      dialogRef,
      preventOpenOnKeydown,
      triggerRef,
    });

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
        <Box background="transparent">
          <Slot
            onClick={toggleIsOpen}
            onMouseEnter={
              openOn === "hover"
                ? () => {
                    return dialogRef.current?.show();
                  }
                : undefined
            }
            onMouseLeave={
              openOn === "hover"
                ? () => {
                    return dialogRef.current?.close();
                  }
                : undefined
            }
            onPointerEnter={
              openOn === "hover"
                ? () => {
                    return dialogRef.current?.show();
                  }
                : undefined
            }
            onPointerLeave={
              openOn === "hover"
                ? () => {
                    return dialogRef.current?.show();
                  }
                : undefined
            }
            onPointerOver={
              openOn === "hover"
                ? () => {
                    return dialogRef.current?.show();
                  }
                : undefined
            }
            ref={triggerRef}
          >
            {triggerNode}
          </Slot>
        </Box>
        <Box
          {...rest}
          as="dialog"
          className={clsx(userClassName, getDialogStyles({ placement }))}
          open={controlledIsOpen}
          ref={dialogRef}
        >
          <Box className={dialogContentStyles}>{children}</Box>
        </Box>
      </Box>
    );
  }
);
