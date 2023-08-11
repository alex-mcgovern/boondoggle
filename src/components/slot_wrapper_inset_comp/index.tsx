import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../box_comp";
import {
  getSlotInnerStyles,
  offsetSlotLeftStyle,
  offsetSlotRightStyle,
  slotOuterStyle,
} from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { WithSlots } from "../../types";
import type { BoxProps } from "../box_comp";
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
          <Box {...slotProps} className={slotOuterStyle} left="0">
            <Box className={getSlotInnerStyles({ size })}>{slotLeft}</Box>
          </Box>
        )}

        <Slot
          className={clsx({
            [offsetSlotLeftStyle]: !!slotLeft,
            [offsetSlotRightStyle]: !!slotRight,
          })}
        >
          {children}
        </Slot>

        {slotRight && (
          <Box {...slotProps} className={slotOuterStyle} right="0">
            <Box className={getSlotInnerStyles({ size })}>{slotRight}</Box>
          </Box>
        )}
      </Box>
    );
  }
);
