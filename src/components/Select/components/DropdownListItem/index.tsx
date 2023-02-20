import type { Ref } from "react";
import React, { forwardRef } from "react";
import clsx from "clsx";
import type { VariantInteractiveElementSizeEnum } from "../../../../styles/common/variant_interactive_element_size.css";
import { Box } from "../../../Box";
import type { DropdownItem } from "../../types";
import * as styles from "./index.css";

export interface DropdownListItemProps {
  isHighlighted: boolean;
  size?: VariantInteractiveElementSizeEnum;
  item: DropdownItem;
  isSelected?: boolean;
  isCheckboxVisible: boolean;
}

export const DropdownListItem = forwardRef(
  (
    {
      item,
      size,
      isHighlighted,
      isSelected,
      isCheckboxVisible,
      ...rest
    }: DropdownListItemProps,
    ref
  ) => {
    const linkClassNames = clsx(
      styles.getDropdownListItemStyles({
        size,
      }),
      {
        [styles.isHighlighted]: isHighlighted,
        [styles.isSelected]: isSelected,
      }
    );

    /**
     * ToDo: Re-implement links in dropdown as polymorphic list items
     */
    // const link = item.link && createInternalLink(item.link);
    // if (link) {
    //   return (
    //     <Link
    //       id={item.label}
    //       link={link}
    //       className={linkClassNames}
    //       {...rest}
    //       ref={ref as Ref<HTMLAnchorElement>}
    //     >
    //       {children}
    //     </Link>
    //   );
    // }

    return (
      <Box
        as="span"
        id={item.label?.toString()}
        className={linkClassNames}
        {...rest}
        ref={ref as Ref<HTMLElement>}
      >
        {isCheckboxVisible && (
          <input
            type="checkbox"
            readOnly
            tabIndex={-1}
            checked={isSelected || false}
          />
        )}
        {item.label}
      </Box>
    );
  }
);
