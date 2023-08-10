import { useCallback, useMemo } from "react";

import { arrayHasLength } from "../../lib/arrayHasLength";
import { exhaustiveSwitchGuard } from "../../lib/exhaustiveSwitchGuard";
import { SelectMulti, type SelectMultiProps } from "../SelectMulti";

import type { WithPlaceholder } from "../../types";
import type { SelectItemShape } from "../Select/types";
import type { FilterAppearance } from "../core.ui.data_table/types";
import type { Column } from "@tanstack/react-table";

type CustomizableSelectProps = Partial<SelectMultiProps>;

/**
 * Returns props for the select component based on the appearance.
 */
const getSelectProps = (
  appearance: FilterAppearance
): CustomizableSelectProps => {
  switch (appearance) {
    case "TABLE_CELL": {
      return {
        inputProps: { hasBorder: false },

        size: "sm",
        wrapperProps: { __minWidth: "8rem" },
      };
    }

    case "INPUT": {
      return {};
    }

    default: {
      return exhaustiveSwitchGuard(appearance);
    }
  }
};

/** ----------------------------------------------------------------------------- */

type DataTableFilterSelectProps<TTableData> = Partial<SelectMultiProps> &
  WithPlaceholder & {
    /** The appearance of the filter component. */
    appearance?: "TABLE_CELL" | "INPUT";
    /** The `react-table` column instance to filter. */
    column?: Column<TTableData, unknown>;
    /** The items to display in the select. */
    items: Array<SelectItemShape>;
  };

/**
 * A filter component for filtering a `react-table` column by a multi-select.
 */
export function DataTableFilterSelect<TTableData>({
  appearance = "TABLE_CELL",
  column,
  items,
  placeholder,
  ...rest
}: DataTableFilterSelectProps<TTableData>) {
  const appearanceProps = useMemo(() => {
    return getSelectProps(appearance);
  }, [appearance]);

  const handleChange = useCallback(
    (selected_items: Array<SelectItemShape>) => {
      return column?.setFilterValue(() => {
        if (!arrayHasLength(selected_items)) {
          return null;
        }

        return selected_items?.map((item) => {
          return item.value;
        });
      });
    },
    [column]
  );

  if (!column) {
    return null;
  }

  return (
    <SelectMulti
      {...(appearanceProps as SelectMultiProps)}
      {...(rest as SelectMultiProps)}
      isFilterable
      items={items}
      name={`filter_${column.id}`}
      onChange={handleChange}
      placeholder={placeholder}
      selectedItems={items.filter((item) => {
        const filterValue = column.getFilterValue() as Array<string>;
        return filterValue?.includes(item.value);
      })}
    />
  );
}
