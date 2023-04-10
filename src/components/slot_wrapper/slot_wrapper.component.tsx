import React from "react";

import { Box } from "../box_component";

import type { BoxProps } from "../box_component";

interface SlotWrapperProps extends BoxProps {
  slotLeft?: React.ReactNode;
  slotRight?: React.ReactNode;
  children?: React.ReactNode;
}

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
      alignItems="start"
      gap="spacing2"
      {...rest}
    >
      {slotLeft && (
        <Box paddingY="spacing1" color="text_default_low_contrast">
          {slotLeft}
        </Box>
      )}

      {children}

      {slotRight && (
        <Box paddingY="spacing1" color="text_default_low_contrast">
          {slotRight}
        </Box>
      )}
    </Box>
  );
}
