import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box_component";
import { DropdownItem } from "./dropdown_item.component";
import * as styles from "./select.styles.css";

import type { SharedUiScale } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { DropdownItemShape } from "./select.types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionGetSelectedItemPropsOptions,
} from "downshift";
import type { LegacyRef } from "react";

/**
 * ------------------------------------------------------------------------------
 * Util function to get props for individual dropdown items
 * May conditionally call `getItemProps` or `getSelectedItemProps` depending on
 * whether `isMulti` is true, and whether the item is selected or not
 * ------------------------------------------------------------------------------
 */

interface GetDropdownItemPropsArgs
  extends Pick<
    DropdownMenuProps,
    "getItemProps" | "getSelectedItemProps" | "removeSelectedItem"
  > {
  item: DropdownItemShape;
  isItemSelected?: boolean;
  [key: string]: unknown;
}

export const getDropdownItemProps = ({
  isItemSelected,
  getItemProps,
  getSelectedItemProps,
  removeSelectedItem,
  item,
  isMulti,
  ...rest
}: GetDropdownItemPropsArgs) => {
  if (isMulti && getSelectedItemProps) {
    return isItemSelected
      ? {
          ...getItemProps({
            item,
            ...rest,
          }),
          ...getSelectedItemProps({
            selectedItem: item,
            onClick: (e) => {
              e.stopPropagation();
              if (removeSelectedItem) {
                removeSelectedItem(item);
              }
            },
          }),
        }
      : getItemProps({ item, ...rest });
  }

  return getItemProps({ item });
};

/**
 * ------------------------------------------------------------------------------
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMultiple`
 * ------------------------------------------------------------------------------
 */

export interface DropdownMenuProps extends SprinklesArgs {
  /** Required props  */
  getIsItemSelected: (item: DropdownItemShape) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItemShape>["getItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItemShape>["getMenuProps"];
  isOpen: boolean;
  items: Array<DropdownItemShape>;

  /** Optional props  */
  getSelectedItemProps?: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<DropdownItemShape>
  ) => { [key: string]: unknown };
  isMulti?: boolean;
  highlightedIndex?: number | undefined;
  removeSelectedItem?: UseMultipleSelectionActions<DropdownItemShape>["removeSelectedItem"];
  size?: SharedUiScale;
}

export const DropdownMenu = forwardRef(
  (
    {
      getIsItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps,
      highlightedIndex,
      removeSelectedItem,
      isMulti,
      isOpen,
      items,
      size = "md",
      ...rest
    }: DropdownMenuProps,
    ref
  ) => {
    const dropdownWrapperStyles = clsx(styles.dropdownListWrapper, {
      [styles.dropdownWrapperClosed]: !isOpen,
    });

    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    /**
     * Note: `DropdownMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Box
        className={dropdownWrapperStyles}
        {...atomProps}
        {...getMenuProps?.({
          ...otherProps,
          ref: ref as LegacyRef<HTMLElement>,
        })}
      >
        {Array.isArray(items) &&
          items.map((item, index) => {
            if (!item.label) {
              return null;
            }

            const isItemSelected = getIsItemSelected?.(item);

            return (
              <DropdownItem
                item={item}
                isMulti={isMulti}
                isHighlighted={highlightedIndex === index}
                key={item.label}
                isDropdownItemSelected={isItemSelected}
                size={size}
                {...getDropdownItemProps({
                  isItemSelected,
                  index,
                  getItemProps,
                  getSelectedItemProps,
                  item,
                  isMulti,
                  removeSelectedItem,
                })}
              />
            );
          })}
      </Box>
    );
  }
);
