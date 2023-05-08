import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../../../box";
import * as styles from "./dropdown_item.styles.css";

import type { ElementSizeEnum } from "../../../../styles/common/element_size.css";
import type { BoxProps } from "../../../box";
import type { DropdownItemShape } from "../../select.types";
import type { Ref } from "react";

export type DropdownItemProps = BoxProps & {
  isHighlighted: boolean;
  isMultipleSelectionEnabled?: boolean;
  size?: ElementSizeEnum;
  isMulti?: boolean;
  item: DropdownItemShape;
  isDropdownItemSelected?: boolean;
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
    ref: Ref<HTMLLIElement>
  ) => {
    const { label, slotLeft, ...restItemProps } = item || {};

    return (
      <Box
        as="li"
        id={label}
        className={clsx(
          styles.getDropdownItemStyles({
            size,
          }),
          {
            [styles.isHighlighted]: isHighlighted,
            [styles.isSelected]: isDropdownItemSelected,
          }
        )}
        {...rest}
        {...restItemProps}
        ref={ref}
      >
        {slotLeft && slotLeft}
        <Box flexShrink="0">{label}</Box>
        {isMulti && (
          <Box
            as="input"
            type="checkbox"
            readOnly
            tabIndex={-1}
            checked={isDropdownItemSelected}
            marginLeft="auto"
          />
        )}
      </Box>
    );
  }
);
