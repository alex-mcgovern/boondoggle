import { extractAtomsFromProps } from "@dessert-box/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { usePopper } from "react-popper";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Icon } from "../icon";
import * as styles from "./select.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../box";
import type { DropdownItemShape } from "./select.types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionGetSelectedItemPropsOptions,
} from "downshift";
import type { LegacyRef, ReactNode, Ref } from "react";

export const DEFAULT_SLOT_RIGHT: ReactNode = <Icon icon={faAngleDown} />;

/**
 * Hook to wrap popper-js logic for dropdown menu for both SelectSingle and SelectMulti
 */
export const useSelectPopper = () => {
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLDivElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    popperAnchorEl,
    popperElement,
    {
      placement: "bottom-start",
      strategy: "fixed",
    }
  );

  return {
    setPopperAnchorEl,
    setPopperElement,
    popperStyles,
    popperAttributes,
  };
};

export interface DropdownItemProps {
  isHighlighted: boolean;
  isMultipleSelectionEnabled?: boolean;
  size?: ElementSizeEnum;
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
    ref: Ref<HTMLLIElement>
  ) => {
    return (
      <Box
        as="li"
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
        ref={ref}
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

/**
 * Util function to get props for individual dropdown items * May conditionally call `getItemProps` or `getSelectedItemProps` depending on * whether `isMulti` is true, and whether the item is selected or not
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
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export interface DropdownMenuProps extends BoxProps {
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
