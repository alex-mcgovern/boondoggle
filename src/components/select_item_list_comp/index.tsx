import clsx from "clsx";
import { forwardRef } from "react";

import { Dialog } from "../dialog_comp";
import { getDropdownItemProps } from "../select_comp/shared/get_dropdown_item_props";
import { SelectItem } from "../select_item_comp";
import { selectItemListWrapper } from "./styles.css";

import type { WithSize } from "../../types";
import type { DialogProps } from "../dialog_comp";
import type { SelectItemShape } from "../select_comp/types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionGetSelectedItemPropsOptions,
} from "downshift";
import type { LegacyRef } from "react";

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export type SelectItemListProps = DialogProps &
  WithSize & {
    getIsItemSelected: (item: SelectItemShape) => boolean;
    getItemProps: UseComboboxPropGetters<SelectItemShape>["getItemProps"];
    getMenuProps: UseComboboxPropGetters<SelectItemShape>["getMenuProps"];
    getSelectedItemProps?: (
      options: UseMultipleSelectionGetSelectedItemPropsOptions<SelectItemShape>
    ) => { [key: string]: unknown };
    highlightedIndex?: number | undefined;
    isMulti?: boolean;
    items: Array<SelectItemShape>;
    removeSelectedItem?: UseMultipleSelectionActions<SelectItemShape>["removeSelectedItem"];
  };

export const SelectItemList = forwardRef(
  (
    {
      className: userClassName,
      getIsItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps,
      highlightedIndex,
      isMulti,
      isOpen: controlledIsOpen,
      items,
      removeSelectedItem,
      size = "md",
      ...rest
    }: SelectItemListProps,
    ref
  ) => {
    /**
     * Note: `SelectItemList` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Dialog
        className={clsx(selectItemListWrapper, userClassName)}
        isOpen={controlledIsOpen}
        preventOpenOnKeydown
        {...rest}
        {...getMenuProps?.({
          ref: ref as LegacyRef<HTMLElement>,
        })}
      >
        {Array.isArray(items) &&
          items.length > 0 &&
          items.map((item, index) => {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { onClick: _unusedOnClick, ...restItem } = item;

            if (!item.label) {
              return null;
            }
            return (
              <SelectItem
                isDropdownItemSelected={getIsItemSelected?.(item)}
                isHighlighted={highlightedIndex === index}
                isMulti={isMulti}
                item={restItem}
                key={`${item.label}-${item.value}`}
                size={size}
                {...getDropdownItemProps({
                  getItemProps,
                  getSelectedItemProps,
                  index,
                  isMulti,
                  item: restItem,
                  removeSelectedItem,
                })}
              />
            );
          })}

        {Array.isArray(items) && items.length === 0 && (
          <SelectItem
            as="button"
            isDropdownItemSelected={false}
            isMulti={isMulti}
            item={{
              as: "button",
              disabled: true,
              label: "No results",
              value: "",
            }}
            size={size}
            {...getDropdownItemProps({
              disabled: true,
              getItemProps,
              getSelectedItemProps,
              index: 0,
              isMulti,
              item: { label: "No results", value: "" },
              removeSelectedItem,
            })}
          />
        )}
      </Dialog>
    );
  }
);
