import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../../../box";
import { SlotWrapper } from "../../../slot_wrapper";
import * as styles from "./dropdown_item.styles.css";

import type { ElementSizeEnum } from "../../../../styles/common/element_size.css";
import type { BoxProps } from "../../../box";
import type { DropdownItemShape } from "../../select.types";
import type { Ref } from "react";

export type DropdownItemProps = BoxProps & {
  isDropdownItemSelected?: boolean;
  isHighlighted: boolean;
  isMulti?: boolean;
  isMultipleSelectionEnabled?: boolean;
  item: DropdownItemShape;
  size?: ElementSizeEnum;
};

export const DropdownItem = forwardRef(
  (
    {
      item,
      size,
      isHighlighted,
      isMulti,
      isDropdownItemSelected,
      ...rest
    }: DropdownItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { label, slotLeft, isSelected: _, ...restItemProps } = item || {};

    return (
      <SlotWrapper
        as="li"
        id={label}
        size={size}
        slotLeft={slotLeft}
        slotProps={{ width: "spacing_2" }}
        className={clsx(
          styles.getDropdownItemStyles({
            size,
          }),
          {
            [styles.isHighlighted]: isHighlighted,
          }
        )}
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
