import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { Children, forwardRef } from "react";

import { Box } from "../box";
import {
  getSlotContainerStyles,
  getSlotInnerStyles,
  getSlotLeftOffsetStyles,
  getSlotRightOffsetStyles,
} from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { WithSlots } from "../../types";
import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

type SlotWrapperProps = WithSlots & {
  children?: ReactNode;
  className?: string;
  size: ElementSizeEnum;
  slotProps?: BoxProps;
} & BoxProps;

export const SlotWrapperInset = forwardRef(
  (
    {
      children,
      className: userClassName,
      size,
      slotLeft,
      slotProps,
      slotRight,
      ...rest
    }: SlotWrapperProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Box className={userClassName} position="relative" ref={ref} {...rest}>
        {slotLeft && (
          <Box
            className={getSlotContainerStyles({
              numSlots: slotLeft?.length,
              size,
            })}
            left="0"
          >
            {Children.map(slotLeft, (child) => {
              return (
                <div className={getSlotInnerStyles({ size })}>{child}</div>
              );
            })}
          </Box>
        )}

        <Slot
          className={clsx({
            [getSlotLeftOffsetStyles({ numSlots: slotLeft?.length, size })]:
              !!slotLeft,
            [getSlotRightOffsetStyles({ numSlots: slotRight?.length, size })]:
              !!slotRight,
          })}
        >
          {children}
        </Slot>

        {slotRight && (
          <Box
            className={getSlotContainerStyles({
              numSlots: slotRight?.length,
              size,
            })}
            right="0"
          >
            {Children.map(slotRight, (child) => {
              return (
                <div className={getSlotInnerStyles({ size })}>{child}</div>
              );
            })}
          </Box>
        )}
      </Box>
    );
  }
);
