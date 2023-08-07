import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../Box";
import { SlotWrapper } from "../SlotWrapper";
import * as styles from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../Box";
import type { SelectItemShape } from "../Select/types";
import type { Ref } from "react";

export type SelectItemProps = BoxProps & {
  className?: string;
  isDropdownItemSelected?: boolean;
  isHighlighted: boolean;
  isMulti?: boolean;
  isMultipleSelectionEnabled?: boolean;
  item: SelectItemShape;
  size?: ElementSizeEnum;
};

export const SelectItem = forwardRef(
  (
    {
      className: userClassName,
      isDropdownItemSelected,
      isHighlighted,
      isMulti,
      item,
      size,
      ...rest
    }: SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { isSelected: _, label, slotLeft, ...restItemProps } = item || {};

    return (
      <SlotWrapper
        as="li"
        className={clsx(
          userClassName,
          styles.getDropdownItemStyles({
            size,
          }),
          {
            [styles.isHighlighted]: isHighlighted,
          }
        )}
        id={label}
        size={size}
        slotLeft={slotLeft}
        slotProps={{ width: "spacing_2" }}
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
