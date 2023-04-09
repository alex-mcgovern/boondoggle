import clsx from "clsx";
import React, { forwardRef } from "react";

import { Box } from "../box";
import * as styles from "./styles.css";

import type { VariantUiScaleEnum } from "../..";
import type { DropdownItemShape } from "../select_old/types";
import type { Ref } from "react";

export interface DropdownItemProps {
  isHighlighted: boolean;
  isMultipleSelectionEnabled?: boolean;
  size?: VariantUiScaleEnum;
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
    const { label, decorativeNode, description } = item || {};

    return (
      <Box
        as="button"
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
        ref={ref as Ref<HTMLButtonElement>}
      >
        {decorativeNode}
        <Box flexShrink="0">
          {label}
          {description}
        </Box>
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
