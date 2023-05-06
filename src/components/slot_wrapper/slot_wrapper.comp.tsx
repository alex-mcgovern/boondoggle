import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";

export type SlotWrapperProps = BoxProps & {
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
  children?: ReactNode;
  slotProps?: BoxProps;
};

export function SlotWrapper({
  slotLeft,
  slotRight,
  children,
  className: userClassName,
  slotProps,
  ...rest
}: SlotWrapperProps) {
  return (
    <Box
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
