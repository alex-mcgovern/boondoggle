import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../box";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./styles.css";

import type { WithSize } from "../../types";
import type { BoxProps } from "../box";
import type { SelectItemShape } from "../select/types";
import type { Ref } from "react";

export type SelectItemProps = BoxProps &
  WithSize & {
    isDropdownItemSelected?: boolean;
    isHighlighted: boolean;
    isMulti?: boolean;
    isMultipleSelectionEnabled?: boolean;
    item: SelectItemShape;
  };

export const SelectItem = forwardRef(
  (
    {
      isDropdownItemSelected,
      isHighlighted,
      isMulti,
      item,
      size,
      ...rest
    }: SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const {
      className: userClassName,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      colorOverlay,
      isSelected: _,
      label,
      slotLeft,
      ...restItemProps
    } = item || {};

    return (
      <SlotWrapper
        as="li"
        className={clsx(
          userClassName,
          styles.getDropdownItemStyles({
            colorOverlay,
            size,
          }),
          {
            [styles.isHighlighted]: isHighlighted,
          }
        )}
        id={label}
        size={size}
        slotLeft={slotLeft}
        slotProps={{ width: "space_4" }}
        {...rest}
        {...restItemProps}
        ref={ref}
      >
        <Box flexShrink="0">{label}</Box>
        {isMulti && (
          <Box
            as="input"
            checked={isDropdownItemSelected}
            marginLeft="auto"
            readOnly
            tabIndex={-1}
            type="checkbox"
          />
        )}
      </SlotWrapper>
    );
  }
);
