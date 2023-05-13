import { forwardRef } from "react";

import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = {
  children?: ReactNode;
  className?: string;
  slotLeft?: ReactNode;
  slotProps?: BoxProps;
  slotRight?: ReactNode;
} & BoxProps;

export const SlotWrapper = forwardRef(
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
      <Box
        alignItems="center"
        className={userClassName}
        display="flex"
        gap="spacing1"
        ref={ref}
        {...rest}
      >
        {slotLeft && (
          <Box {...slotProps} color="inherit" flexShrink="0">
            {slotLeft}
          </Box>
        )}

        {children}

        {slotRight && (
          <Box {...slotProps} color="inherit" flexShrink="0">
            {slotRight}
          </Box>
        )}
      </Box>
    );
  }
);
