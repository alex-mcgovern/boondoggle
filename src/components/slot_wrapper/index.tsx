import { forwardRef } from "react";

import { Box } from "../box";
import { getSlotStyles } from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { WithSlots } from "../../types";
import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = WithSlots & {
  children?: ReactNode;
  className?: string;
  size: ElementSizeEnum;
  slotProps?: BoxProps;
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
