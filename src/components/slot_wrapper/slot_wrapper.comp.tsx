import { forwardRef } from "react";

import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = BoxProps & {
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
  children?: ReactNode;
  slotProps?: BoxProps;
};

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
        ref={ref}
        className={userClassName}
        display="flex"
        alignItems="center"
        gap="spacing1"
        {...rest}
      >
        {slotLeft && (
          <Box {...slotProps} flexShrink="0" color="inherit">
            {slotLeft}
          </Box>
        )}

        {children}

        {slotRight && (
          <Box {...slotProps} flexShrink="0" color="inherit">
            {slotRight}
          </Box>
        )}
      </Box>
    );
  }
);
