import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";

export type SlotWrapperProps = BoxProps & {
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
  children?: ReactNode;
};

export function SlotWrapper({
  slotLeft,
  slotRight,
  children,
  className: userClassName,
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
        <Box paddingY="spacing1" color="inherit" width="spacing3">
          {slotLeft}
        </Box>
      )}

      {children}

      {slotRight && (
        <Box paddingY="spacing1" color="inherit" width="spacing3">
          {slotRight}
        </Box>
      )}
    </Box>
  );
}
