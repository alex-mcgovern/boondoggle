import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import * as styles from "../select.styles.css";
import { DropdownItem } from "./dropdown_item.comp";
import { getDropdownItemProps } from "./get_dropdown_item_props";

import type { ElementSizeEnum } from "../../../styles/common/element_size.css";
import type { BoxProps } from "../../box";
import type { DropdownItemShape } from "../select.types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionGetSelectedItemPropsOptions,
} from "downshift";
import type { LegacyRef } from "react";

/**

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export type DropdownMenuProps = BoxProps & {
  getIsItemSelected: (item: DropdownItemShape) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItemShape>["getItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItemShape>["getMenuProps"];
  getSelectedItemProps?: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<DropdownItemShape>
  ) => { [key: string]: unknown };
  highlightedIndex?: number | undefined;
  isOpen: boolean;
  isMulti?: boolean;
  items: Array<DropdownItemShape>;
  removeSelectedItem?: UseMultipleSelectionActions<DropdownItemShape>["removeSelectedItem"];
  size?: ElementSizeEnum;
};

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
