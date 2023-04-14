import clsx from "clsx";
import React, { forwardRef } from "react";

import { Box } from "../box";
import * as styles from "./select.styles.css";

import type { SharedUiScale } from "../..";
import type { DropdownItemShape } from "./select.types";
import type { Ref } from "react";

export interface DropdownItemProps {
  isHighlighted: boolean;
  isMultipleSelectionEnabled?: boolean;
  size?: SharedUiScale;
  isMulti?: boolean;
  item: DropdownItemShape;
  isDropdownItemSelected?: boolean;
}

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
    ref
  ) => {
    return (
      <Box
        as="button"
        id={item.label}
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
        ref={ref as Ref<HTMLButtonElement>}
      >
        <Box flexShrink="0">{item.label}</Box>
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
