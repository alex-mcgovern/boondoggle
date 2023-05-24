import { Slot } from "@radix-ui/react-slot/dist/index";
import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../box";
import * as styles from "./slot_wrapper_inset.styles.css";

import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = {
  children?: ReactNode;
  className?: string;
  slotLeft?: ReactNode;
  slotProps?: BoxProps;
  slotRight?: ReactNode;
} & BoxProps;

export const SlotWrapperInset = forwardRef(
  (
    {
      slotLeft,
      slotRight,
      children,
      className: userClassName,
      slotProps,
      ...rest
    }: SlotWrapperProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Box className={userClassName} position="relative" ref={ref} {...rest}>
        {slotLeft && (
          <Box {...slotProps} className={styles.slot} left="0">
            {slotLeft}
          </Box>
        )}

        <Slot
          className={clsx({
            [styles.offsetSlotLeft]: !!slotLeft,
            [styles.offsetSlotRight]: !!slotRight,
          })}
        >
          {children}
        </Slot>

        {slotRight && (
          <Box {...slotProps} className={styles.slot} right="0">
            {slotRight}
          </Box>
        )}
      </Box>
    );
  }
);
