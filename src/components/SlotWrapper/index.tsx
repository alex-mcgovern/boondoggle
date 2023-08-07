import { forwardRef } from "react";

import { Box } from "../Box";
import { getSlotStyles } from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../Box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = {
  children?: ReactNode;
  className?: string;
  size: ElementSizeEnum;
  slotLeft?: ReactNode;
  slotProps?: BoxProps;
  slotRight?: ReactNode;
} & BoxProps;

export const SlotWrapper = forwardRef(
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
      <Box
        alignItems="center"
        className={userClassName}
        display="flex"
        gap="spacing_1"
        ref={ref}
        {...rest}
      >
        {slotLeft && (
          <Box
            {...slotProps}
            className={getSlotStyles({ size })}
            color="inherit"
            flexShrink="0"
          >
            {slotLeft}
          </Box>
        )}

        {children}

        {slotRight && (
          <Box
            {...slotProps}
            className={getSlotStyles({ size })}
            color="inherit"
            flexShrink="0"
          >
            {slotRight}
          </Box>
        )}
      </Box>
    );
  }
);
