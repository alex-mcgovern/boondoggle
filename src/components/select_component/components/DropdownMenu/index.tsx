import clsx from "clsx";
import React, { forwardRef, useContext } from "react";

import { Box } from "../../../box_component/box.component";
import { DownshiftContext } from "../../context/DownshiftContext";
import { DropdownListItem } from "../DropdownListItem";
import * as styles from "./index.css";

import type { VariantUiScaleEnum } from "../../../../styles/common/globalVariantsUiScale.css";
import type { LegacyRef } from "react";

interface DropdownMenuProps {
  size?: VariantUiScaleEnum;
  isSelectMultiFilterable?: boolean;
}

export const DropdownMenu = forwardRef(
  (
    { size = "md", isSelectMultiFilterable, ...rest }: DropdownMenuProps,
    ref
  ) => {
    const {
      getMenuProps,
      isOpen,
      highlightedIndex,
      items,
      getItemProps,
      getIsDropdownItemSelected,
    } = useContext(DownshiftContext);

    const dropdownWrapperStyles = clsx(styles.dropdownMenu, {
      [styles.dropdownMenuClosed]: !isOpen,
    });

    /**
     * Note: `DropdownMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Box
        // as="ul"
        className={dropdownWrapperStyles}
        {...getMenuProps({ ...rest, ref: ref as LegacyRef<HTMLElement> })}
      >
        <Box className={styles.dropdownListInner}>
          {items?.length > 0 &&
            items.map((item, index) => {
              if (!item?.label) {
                return null;
              }

              const isSelected = getIsDropdownItemSelected(item);

              return (
                <DropdownListItem
                  item={item}
                  isHighlighted={highlightedIndex === index}
                  key={item.label}
                  isSelected={isSelected}
                  size={size}
                  isCheckboxVisible={isSelectMultiFilterable}
                  {...getItemProps({
                    index,
                    item,
                  })}
                />
              );
            })}
        </Box>
      </Box>
    );
  }
);
