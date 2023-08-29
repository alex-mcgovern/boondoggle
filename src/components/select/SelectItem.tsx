import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../box";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./SelectItem.css";

import type { WithSize } from "../../common-types";
import type { SelectItemShape } from "./types";
import type { Ref } from "react";

export type SelectItemProps = SelectItemShape &
  WithSize & {
    isDropdownItemSelected?: boolean;
    isHighlighted: boolean;
    isMulti?: boolean;
  };

export const SelectItem = forwardRef(
  (
    {
      as = "li",
      className: userClassName,
      colorOverlay,
      isHighlighted,
      isMulti,
      isSelected,
      label,
      size,
      slotLeft,
      ...rest
    }: SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <SlotWrapper
        as={as}
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
        {...rest}
        ref={ref}
      >
        <Box flexShrink="0">{label}</Box>
        {isMulti && (
          <Box
            as="input"
            checked={isSelected}
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
