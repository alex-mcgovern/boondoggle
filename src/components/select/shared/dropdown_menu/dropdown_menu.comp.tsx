import clsx from "clsx";
import { forwardRef } from "react";

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
    }: DropdownMenuProps,
    ref
  ) => {
    /**
     * Note: `DropdownMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Dialog
        className={clsx(styles.dropdownListWrapper, userClassName)}
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
              <DropdownItem
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
          <DropdownItem
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
