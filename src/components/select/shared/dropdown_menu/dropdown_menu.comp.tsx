import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../../../box/box.comp";
import { Dialog } from "../../../dialog";
import { DropdownItem } from "../dropdown_item/dropdown_item.comp";
import { getDropdownItemProps } from "../get_dropdown_item_props";
import * as styles from "./dropdown_menu.styles.css";

import type { ElementSizeEnum } from "../../../../styles/common/element_size.css";
import type { DialogProps } from "../../../dialog";
import type { DropdownItemShape } from "../../select.types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionGetSelectedItemPropsOptions,
} from "downshift";
import type { LegacyRef } from "react";

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export type DropdownMenuProps = DialogProps & {
  getIsItemSelected: (item: DropdownItemShape) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItemShape>["getItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItemShape>["getMenuProps"];
  getSelectedItemProps?: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<DropdownItemShape>
  ) => { [key: string]: unknown };
  highlightedIndex?: number | undefined;
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
      className: userClassName,
      getSelectedItemProps,
      highlightedIndex,
      removeSelectedItem,
      isMulti,
      items,
      isOpen: controlledIsOpen,
      size = "md",
      ...rest
    }: DropdownMenuProps,
    ref
  ) => {
    const dropdownWrapperStyles = clsx(
      styles.dropdownListWrapper,
      userClassName
    );

    /**
     * Note: `DropdownMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Dialog
        isOpen={controlledIsOpen}
        preventOpenOnKeydown
        {...rest}
        {...getMenuProps?.({
          ref: ref as LegacyRef<HTMLElement>,
        })}
      >
        <Box className={dropdownWrapperStyles}>
          {Array.isArray(items) &&
            items.map((item, index) => {
              if (!item.label) {
                return null;
              }
              const isItemSelected = getIsItemSelected?.(item);
              return (
                <DropdownItem
                  isDropdownItemSelected={isItemSelected}
                  isHighlighted={highlightedIndex === index}
                  isMulti={isMulti}
                  item={item}
                  key={`${item.label}-${item.value}`}
                  size={size}
                  {...getDropdownItemProps({
                    getItemProps,
                    getSelectedItemProps,
                    index,
                    isItemSelected,
                    isMulti,
                    item,
                    removeSelectedItem,
                  })}
                />
              );
            })}
        </Box>
      </Dialog>
    );
  }
);
